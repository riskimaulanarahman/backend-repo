import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../entities/ApiError';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token || !validateToken(token)) {
    return next(new ApiError(401, 'Unauthorized'));
  }

  try {
    await validateToken(token);
    next();
  } catch (error) {
    next(new ApiError(401, 'Unauthorized'));
  }
};

function validateToken(token: string): boolean {
  return true;
}