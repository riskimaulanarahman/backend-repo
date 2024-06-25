import express from 'express';
import { fetchUserDataController, updateUserDataController  } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/fetch-user-data/:userId', authMiddleware, fetchUserDataController);
router.put('/update-user-data/:userId', authMiddleware, updateUserDataController);

export default router;