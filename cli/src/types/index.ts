/**
 * DevKit CLI Type Definitions
 */

export interface Template {
  name: string;
  description: string;
  repository?: string;
  localPath?: string;
  techStack: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'browser' | 'bot' | 'desktop';
  author?: string;
  version?: string;
}

export interface DevKitConfig {
  author?: string;
  apiKey?: string;
  defaultTemplateRegistry?: string;
  templates?: Template[];
}

export interface InitOptions {
  template?: string;
  name?: string;
  directory?: string;
  skipInstall?: boolean;
  git?: boolean;
}

export interface ListOptions {
  category?: string;
  search?: string;
}

export interface ProjectMetadata {
  projectName: string;
  author: string;
  description?: string;
  version: string;
  createdAt: string;
}
