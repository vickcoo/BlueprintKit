import dotenv from 'dotenv';
import app from './app';
import { logger } from './middleware/logger';
import config from './config/config';

// Load environment variables
dotenv.config();

const PORT = config.port;

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`);
  logger.info(`📝 Environment: ${config.env}`);
  logger.info(`🔗 API: http://localhost:${PORT}/api/${config.apiVersion}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: Error) => {
  logger.error('Unhandled Rejection:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});
