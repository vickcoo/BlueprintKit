import { Request, Response } from 'express';

/**
 * Health check endpoint
 */
export const getHealth = (req: Request, res: Response): void => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  });
};

/**
 * Version endpoint
 */
export const getVersion = (req: Request, res: Response): void => {
  res.status(200).json({
    version: '{{VERSION}}',
    apiVersion: process.env.API_VERSION || 'v1',
    name: '{{PROJECT_NAME}}',
  });
};
