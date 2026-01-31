import { Router } from 'express';
import { getHealth, getVersion } from '../controllers/health.controller';

const router = Router();

// Health routes
router.get('/health', getHealth);
router.get('/version', getVersion);

// Add your routes here
// Example:
// router.use('/users', userRoutes);
// router.use('/posts', postRoutes);

export default router;
