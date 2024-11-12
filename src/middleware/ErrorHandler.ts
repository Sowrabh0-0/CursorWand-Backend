import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';
import { CustomError } from '../utils/CustomError';

export const errorHandler = (err: Error | CustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err instanceof CustomError ? err.statusCode : 500;
    const message = err.message || 'Internal Server Error';

    logger.error(`[${req.method}] ${req.path} - ${message}`);

    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }), 
    });
};
