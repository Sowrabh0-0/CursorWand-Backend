import { Response } from 'express';

export class ResponseHandler {
    static success(res: Response, data: any, message = 'Success', statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    }

    static created(res: Response, data: any, message = 'Resource created successfully') {
        return res.status(201).json({
            success: true,
            message,
            data,
        });
    }

    static noContent(res: Response, message = 'No content') {
        return res.status(204).send();
    }

    static unauthorized(res: Response, message = 'Unauthorized access') {
        return res.status(401).json({
            success: false,
            message,
        });
    }

    static forbidden(res: Response, message = 'Forbidden access') {
        return res.status(403).json({
            success: false,
            message,
        });
    }

    static notFound(res: Response, message = 'Resource not found') {
        return res.status(404).json({
            success: false,
            message,
        });
    }

    static error(res: Response, message = 'An error occurred', statusCode = 500) {
        return res.status(statusCode).json({
            success: false,
            message,
        });
    }
}
