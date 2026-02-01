import chalk from 'chalk';
import { ListOptions } from '../types';
import { logger } from '../utils/logger';
import { BUILT_IN_TEMPLATES, filterTemplatesByCategory, searchTemplates } from '../utils/templates';

/**
 * List available templates
 */
export async function listCommand(options: ListOptions = {}): Promise<void> {
  try {
    logger.title('📦 Available Templates');

    let templates = BUILT_IN_TEMPLATES;

    // Filter by category
    if (options.category) {
      templates = filterTemplatesByCategory(options.category);
      if (templates.length === 0) {
        logger.warning(`No templates found in category: ${options.category}`);
        return;
      }
    }

    // Search by keyword
    if (options.search) {
      templates = searchTemplates(options.search);
      if (templates.length === 0) {
        logger.warning(`No templates found matching: ${options.search}`);
        return;
      }
    }

    // Group by category
    const byCategory: Record<string, typeof templates> = {};
    templates.forEach(template => {
      if (!byCategory[template.category]) {
        byCategory[template.category] = [];
      }
      byCategory[template.category].push(template);
    });

    // Display templates
    for (const [category, categoryTemplates] of Object.entries(byCategory)) {
      logger.log('');
      logger.log(chalk.bold.cyan(`${getCategoryIcon(category)} ${category.toUpperCase()}`));
      logger.divider();

      categoryTemplates.forEach(template => {
        logger.log('');
        logger.log(chalk.bold.green(`  ${template.name}`));
        logger.log(`  ${chalk.gray(template.description)}`);
        logger.log(`  ${chalk.blue('Tech Stack:')} ${template.techStack.join(', ')}`);

        if (template.author) {
          logger.log(`  ${chalk.yellow('Author:')} ${template.author}`);
        }

        if (template.version) {
          logger.log(`  ${chalk.magenta('Version:')} ${template.version}`);
        }
      });

      logger.log('');
    }

    logger.divider();
    logger.info(`Total: ${templates.length} template(s)`);
    logger.log('');
    logger.log('Usage:');
    logger.log('  blueprintkit init --template <template-name>');
    logger.log('  blueprintkit init (interactive mode)');
    logger.log('');

  } catch (error) {
    logger.error('Failed to list templates');
    if (error instanceof Error) {
      logger.error(error.message);
    }
    process.exit(1);
  }
}

/**
 * Get icon for category
 */
function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    frontend: '🎨',
    backend: '⚙️',
    fullstack: '🔥',
    mobile: '📱'
  };
  return icons[category] || '📦';
}
