import inquirer from 'inquirer';
import chalk from 'chalk';
import { logger } from '../utils/logger';
import { loadConfig, saveConfig, getConfigPath } from '../utils/config';

/**
 * Manage DevKit configuration
 */
export async function configCommand(action?: string, value?: string): Promise<void> {
  try {
    const config = await loadConfig();

    // If no action, show current config
    if (!action) {
      logger.title('⚙️  DevKit Configuration');

      if (Object.keys(config).length === 0) {
        logger.info('No configuration set yet');
        logger.log('');
        logger.log('Set configuration:');
        logger.log('  blueprintkit config set author "Your Name"');
        logger.log('  blueprintkit config set apiKey "your-api-key"');
        return;
      }

      logger.log('');
      logger.log(chalk.bold('Current Configuration:'));
      logger.divider();

      if (config.author) {
        logger.log(`${chalk.cyan('Author:')} ${config.author}`);
      }

      if (config.apiKey) {
        logger.log(`${chalk.cyan('API Key:')} ${maskApiKey(config.apiKey)}`);
      }

      if (config.defaultTemplateRegistry) {
        logger.log(`${chalk.cyan('Template Registry:')} ${config.defaultTemplateRegistry}`);
      }

      logger.log('');
      logger.info(`Config file: ${getConfigPath()}`);
      logger.log('');

      return;
    }

    // Handle actions
    switch (action.toLowerCase()) {
      case 'set':
        await handleSet(config);
        break;

      case 'get':
        await handleGet(config, value);
        break;

      case 'delete':
      case 'remove':
        await handleDelete(config, value);
        break;

      case 'reset':
        await handleReset();
        break;

      default:
        logger.error(`Unknown action: ${action}`);
        logger.log('');
        logger.log('Available actions:');
        logger.log('  blueprintkit config          - Show current config');
        logger.log('  blueprintkit config set      - Set config value');
        logger.log('  blueprintkit config get      - Get config value');
        logger.log('  blueprintkit config delete   - Delete config value');
        logger.log('  blueprintkit config reset    - Reset all config');
        process.exit(1);
    }

  } catch (error) {
    logger.error('Failed to manage configuration');
    if (error instanceof Error) {
      logger.error(error.message);
    }
    process.exit(1);
  }
}

/**
 * Set configuration value
 */
async function handleSet(config: any): Promise<void> {
  const { key, value } = await inquirer.prompt([
    {
      type: 'list',
      name: 'key',
      message: 'Select configuration to set:',
      choices: [
        { name: 'Author Name', value: 'author' },
        { name: 'API Key', value: 'apiKey' },
        { name: 'Default Template Registry', value: 'defaultTemplateRegistry' }
      ]
    },
    {
      type: 'input',
      name: 'value',
      message: 'Enter value:',
      validate: (input: string) => input ? true : 'Value cannot be empty'
    }
  ]);

  config[key] = value;
  await saveConfig(config);

  logger.success(`Configuration updated: ${key} = ${key === 'apiKey' ? maskApiKey(value) : value}`);
}

/**
 * Get configuration value
 */
async function handleGet(config: any, key?: string): Promise<void> {
  if (!key) {
    const { selectedKey } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedKey',
        message: 'Select configuration to get:',
        choices: Object.keys(config).length > 0
          ? Object.keys(config)
          : ['No configuration set']
      }
    ]);
    key = selectedKey;
  }

  if (key && config[key]) {
    const value = key === 'apiKey' ? maskApiKey(config[key]) : config[key];
    logger.info(`${key}: ${value}`);
  } else {
    logger.warning(`Configuration "${key}" not found`);
  }
}

/**
 * Delete configuration value
 */
async function handleDelete(config: any, key?: string): Promise<void> {
  if (!key) {
    if (Object.keys(config).length === 0) {
      logger.warning('No configuration to delete');
      return;
    }

    const { selectedKey } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedKey',
        message: 'Select configuration to delete:',
        choices: Object.keys(config)
      }
    ]);
    key = selectedKey;
  }

  if (key && config[key]) {
    delete config[key];
    await saveConfig(config);
    logger.success(`Configuration deleted: ${key}`);
  } else {
    logger.warning(`Configuration "${key}" not found`);
  }
}

/**
 * Reset all configuration
 */
async function handleReset(): Promise<void> {
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to reset all configuration?',
      default: false
    }
  ]);

  if (confirm) {
    await saveConfig({});
    logger.success('Configuration reset');
  } else {
    logger.info('Cancelled');
  }
}

/**
 * Mask API key for display
 */
function maskApiKey(apiKey: string): string {
  if (apiKey.length <= 8) return '***';
  return apiKey.slice(0, 4) + '***' + apiKey.slice(-4);
}
