#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { initCommand } from './commands/init';
import { listCommand } from './commands/list';
import { configCommand } from './commands/config';

const program = new Command();

// CLI metadata
program
  .name('devkit')
  .description('A powerful CLI tool for scaffolding production-ready projects')
  .version('0.1.0');

// Init command
program
  .command('init')
  .description('Initialize a new project from a template')
  .option('-t, --template <name>', 'Template name')
  .option('-n, --name <name>', 'Project name')
  .option('-d, --directory <path>', 'Target directory')
  .option('--skip-install', 'Skip dependency installation')
  .option('--no-git', 'Skip git initialization')
  .action(async (options) => {
    await initCommand(options);
  });

// List command
program
  .command('list')
  .description('List available templates')
  .option('-c, --category <category>', 'Filter by category (frontend, backend, fullstack, mobile)')
  .option('-s, --search <query>', 'Search templates by keyword')
  .action(async (options) => {
    await listCommand(options);
  });

// Config command
program
  .command('config [action] [value]')
  .description('Manage DevKit configuration')
  .action(async (action, value) => {
    await configCommand(action, value);
  });

// Help text
program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ devkit init                          # Interactive mode');
  console.log('  $ devkit init -t nextjs-tailwind       # Use specific template');
  console.log('  $ devkit list                          # List all templates');
  console.log('  $ devkit list -c backend               # List backend templates');
  console.log('  $ devkit config                        # Show current config');
  console.log('  $ devkit config set                    # Set config value');
  console.log('');
});

// Error handling
program.exitOverride();

try {
  program.parse(process.argv);

  // Show help if no command provided
  if (!process.argv.slice(2).length) {
    console.log(chalk.cyan.bold('\n🛠️  DevKit - Production-Ready Project Scaffolder\n'));
    program.outputHelp();
  }
} catch (error) {
  if (error instanceof Error) {
    console.error(chalk.red('Error:'), error.message);
  }
  process.exit(1);
}
