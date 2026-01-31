import fs from 'fs-extra';
import path from 'path';
import os from 'os';
import { DevKitConfig } from '../types';

const CONFIG_DIR = path.join(os.homedir(), '.devkit');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

/**
 * Ensure config directory exists
 */
export async function ensureConfigDir(): Promise<void> {
  await fs.ensureDir(CONFIG_DIR);
}

/**
 * Load DevKit configuration
 */
export async function loadConfig(): Promise<DevKitConfig> {
  await ensureConfigDir();

  if (await fs.pathExists(CONFIG_FILE)) {
    try {
      return await fs.readJson(CONFIG_FILE);
    } catch (error) {
      console.error('Error reading config file, using defaults');
      return {};
    }
  }

  return {};
}

/**
 * Save DevKit configuration
 */
export async function saveConfig(config: DevKitConfig): Promise<void> {
  await ensureConfigDir();
  await fs.writeJson(CONFIG_FILE, config, { spaces: 2 });
}

/**
 * Update specific config values
 */
export async function updateConfig(updates: Partial<DevKitConfig>): Promise<void> {
  const currentConfig = await loadConfig();
  const newConfig = { ...currentConfig, ...updates };
  await saveConfig(newConfig);
}

/**
 * Get config file path
 */
export function getConfigPath(): string {
  return CONFIG_FILE;
}
