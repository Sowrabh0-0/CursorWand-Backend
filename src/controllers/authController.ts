import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/authService';
import { ResponseHandler } from '../utils/ResponseHandler';

export class AuthController {
    static async register(req: Request, res: Response): Promise<void> {
        const { name, email, password } = req.body;
        const result = await AuthService.register(name, email, password);
        ResponseHandler.success(res, result, 'User registered successfully', 201);
    }

    static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { email, password } = req.body;
        const result = await AuthService.login(email, password);
        ResponseHandler.success(res, result, 'Login successful');
    }
}
