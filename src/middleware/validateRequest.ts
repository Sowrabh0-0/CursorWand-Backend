import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { CustomError } from '../utils/CustomError';

export const validateRequest = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return next(new CustomError(error.details[0].message, 400));
    }
    next();
};
