import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import { InitOptions, ProjectMetadata } from '../types';
import { logger } from '../utils/logger';
import { BUILT_IN_TEMPLATES, getTemplateByName } from '../utils/templates';
import { validateProjectName, validateDirectory, sanitizeProjectName } from '../utils/validation';
import { loadConfig } from '../utils/config';

/**
 * Initialize a new project from a template
 */
export async function initCommand(options: InitOptions = {}): Promise<void> {
  try {
    logger.title('🚀 BlueprintKit Project Initializer');

    // Load user config
    const config = await loadConfig();

    // Step 1: Select template
    let templateName = options.template;
    if (!templateName) {
      const templateChoices = BUILT_IN_TEMPLATES.map(t => ({
        name: `${t.name} - ${t.description}`,
        value: t.name,
        short: t.name
      }));

      const { selectedTemplate } = await inquirer.prompt([
        {
          type: 'list',
          name: 'selectedTemplate',
          message: 'Select a template:',
          choices: templateChoices
        }
      ]);

      templateName = selectedTemplate;
    }

    const template = getTemplateByName(templateName!);
    if (!template) {
      logger.error(`Template "${templateName}" not found`);
      process.exit(1);
    }

    // Step 2: Get project name
    let projectName = options.name;
    if (!projectName) {
      const { name } = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Project name:',
          validate: (input: string) => {
            if (!input) return 'Project name is required';
            const validation = validateProjectName(input);
            return validation.valid ? true : validation.error!;
          }
        }
      ]);
      projectName = name;
    }

    // Validate project name
    const nameValidation = validateProjectName(projectName!);
    if (!nameValidation.valid) {
      logger.error(nameValidation.error!);
      process.exit(1);
    }

    // Step 3: Determine target directory
    const targetDir = options.directory || path.join(process.cwd(), projectName!);

    // Validate directory
    const dirValidation = await validateDirectory(targetDir);
    if (!dirValidation.valid) {
      logger.error(dirValidation.error!);

      const { overwrite } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'overwrite',
          message: 'Directory is not empty. Continue anyway?',
          default: false
        }
      ]);

      if (!overwrite) {
        logger.info('Aborted');
        process.exit(0);
      }
    }

    // Step 4: Get additional metadata
    let author = options.author;
    let description = options.description;

    // Only prompt if not provided via CLI
    if (!author || !description) {
      const prompted = await inquirer.prompt([
        {
          type: 'input',
          name: 'author',
          message: 'Author name:',
          default: author || config.author || 'Your Name',
          when: !author
        },
        {
          type: 'input',
          name: 'description',
          message: 'Project description:',
          default: description || `A project created with ${template.name}`,
          when: !description
        }
      ]);

      author = author || prompted.author;
      description = description || prompted.description;
    }

    // Step 5: Confirm installation
    if (!options.skipInstall) {
      const { install } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'install',
          message: 'Install dependencies?',
          default: true
        }
      ]);
      options.skipInstall = !install;
    }

    // Step 6: Copy template
    logger.startSpinner('Creating project...');

    await fs.ensureDir(targetDir);

    if (template.localPath) {
      await fs.copy(template.localPath, targetDir, {
        filter: (src) => {
          // Skip node_modules and other unnecessary files
          const basename = path.basename(src);
          return !['node_modules', '.git', 'dist', '.next', '.turbo'].includes(basename);
        }
      });
    }

    logger.succeedSpinner('Project structure created');

    // Step 7: Replace template variables
    logger.startSpinner('Configuring project...');

    const metadata: ProjectMetadata = {
      projectName: projectName!,
      author: author || 'Your Name',
      description: description || `A project created with ${template.name}`,
      version: '0.1.0',
      createdAt: new Date().toISOString()
    };

    await replaceTemplateVariables(targetDir, metadata);

    logger.succeedSpinner('Project configured');

    // Step 8: Initialize git
    if (options.git !== false) {
      try {
        logger.startSpinner('Initializing git repository...');
        execSync('git init', { cwd: targetDir, stdio: 'ignore' });
        logger.succeedSpinner('Git repository initialized');
      } catch (error) {
        logger.warning('Failed to initialize git repository');
      }
    }

    // Step 9: Install dependencies
    if (!options.skipInstall) {
      logger.startSpinner('Installing dependencies (this may take a while)...');

      try {
        const packageManager = detectPackageManager();
        execSync(`${packageManager} install`, {
          cwd: targetDir,
          stdio: 'ignore'
        });
        logger.succeedSpinner('Dependencies installed');
      } catch (error) {
        logger.failSpinner('Failed to install dependencies');
        logger.warning('You can install them manually later');
      }
    }

    // Step 10: Success message
    logger.divider();
    logger.success('Project created successfully! 🎉');
    logger.log('');
    logger.info(`Project: ${projectName}`);
    logger.info(`Location: ${targetDir}`);
    logger.info(`Template: ${template.name}`);
    logger.log('');
    logger.log('Next steps:');
    logger.log(`  cd ${projectName}`);

    if (options.skipInstall) {
      logger.log(`  npm install`);
    }

    logger.log(`  npm run dev`);
    logger.log('');

  } catch (error) {
    logger.error('Failed to create project');
    if (error instanceof Error) {
      logger.error(error.message);
    }
    process.exit(1);
  }
}

/**
 * Replace template variables in files
 */
async function replaceTemplateVariables(
  targetDir: string,
  metadata: ProjectMetadata
): Promise<void> {
  const replacements: Record<string, string> = {
    '{{PROJECT_NAME}}': metadata.projectName,
    '__PROJECT_NAME__': metadata.projectName,
    '{{AUTHOR}}': metadata.author,
    '__AUTHOR__': metadata.author,
    '{{DESCRIPTION}}': metadata.description || '',
    '__DESCRIPTION__': metadata.description || '',
    '{{VERSION}}': metadata.version,
    '__VERSION__': metadata.version,
    '{{YEAR}}': new Date().getFullYear().toString(),
    '__YEAR__': new Date().getFullYear().toString()
  };

  // Recursively process all text files
  await processDirectory(targetDir, replacements);
}

/**
 * Recursively process directory and replace variables
 */
async function processDirectory(
  dir: string,
  replacements: Record<string, string>
): Promise<void> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip excluded directories
    if (entry.isDirectory()) {
      const excludedDirs = ['node_modules', '.git', 'dist', '.next', 'build', 'venv', '__pycache__'];
      if (excludedDirs.includes(entry.name)) {
        continue;
      }
      await processDirectory(fullPath, replacements);
    } else if (entry.isFile()) {
      // Only process text files
      const textExtensions = [
        '.js', '.ts', '.jsx', '.tsx', '.vue', '.svelte',
        '.json', '.md', '.txt', '.html', '.css', '.scss',
        '.go', '.mod', '.py', '.rs', '.java', '.xml', '.yaml', '.yml',
        '.toml', '.env.example', 'LICENSE', 'Dockerfile'
      ];

      const shouldProcess = textExtensions.some(ext =>
        entry.name.endsWith(ext) || entry.name === 'LICENSE'
      );

      if (shouldProcess) {
        try {
          let content = await fs.readFile(fullPath, 'utf-8');
          let modified = false;

          for (const [key, value] of Object.entries(replacements)) {
            if (content.includes(key)) {
              content = content.replace(new RegExp(escapeRegex(key), 'g'), value);
              modified = true;
            }
          }

          if (modified) {
            await fs.writeFile(fullPath, content, 'utf-8');
          }
        } catch (error) {
          // Skip binary files or files that can't be read
        }
      }
    }
  }
}

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Detect package manager
 */
function detectPackageManager(): string {
  try {
    execSync('yarn --version', { stdio: 'ignore' });
    return 'yarn';
  } catch {
    try {
      execSync('pnpm --version', { stdio: 'ignore' });
      return 'pnpm';
    } catch {
      return 'npm';
    }
  }
}
