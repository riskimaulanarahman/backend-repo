import { Request, Response, NextFunction } from 'express';
import { updateUserData, fetchUserData } from '../repository/userCollection';
import { ApiError } from '../entities/ApiError';

// Endpoint untuk memperbarui data pengguna
export const updateUserDataController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId;
    const data = req.body;
    const result = await updateUserData(userId, data);
    res.status(200).json(result);
  } catch (error) {
    next(new ApiError(500, 'Failed to update user data'));
  }
};

// Endpoint untuk mengambil data pengguna
export const fetchUserDataController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId;
    const userData = await fetchUserData(userId);
    res.status(200).json(userData);
  } catch (error) {
    next(new ApiError(404, 'User not found'));
  }
};