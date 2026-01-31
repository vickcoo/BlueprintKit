import validateNpmPackageName from 'validate-npm-package-name';
import fs from 'fs-extra';
import path from 'path';

/**
 * Validate project name
 */
export function validateProjectName(name: string): { valid: boolean; error?: string } {
  const result = validateNpmPackageName(name);

  if (!result.validForNewPackages) {
    const errors = [...(result.errors || []), ...(result.warnings || [])];
    return {
      valid: false,
      error: errors.join(', ')
    };
  }

  return { valid: true };
}

/**
 * Check if directory exists and is empty
 */
export async function validateDirectory(dirPath: string): Promise<{ valid: boolean; error?: string }> {
  try {
    const exists = await fs.pathExists(dirPath);

    if (exists) {
      const files = await fs.readdir(dirPath);
      if (files.length > 0) {
        return {
          valid: false,
          error: `Directory ${dirPath} already exists and is not empty`
        };
      }
    }

    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      error: `Error checking directory: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

/**
 * Sanitize project name for use in various contexts
 */
export function sanitizeProjectName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/^-+|-+$/g, '');
}
