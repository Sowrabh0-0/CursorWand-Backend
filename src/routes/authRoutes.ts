import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { validateRequest } from '../middleware/validateRequest';
import { registerSchema, loginSchema } from '../validators/authValidator';
import { asyncWrapper } from '../utils/asyncWrapper';

const router = Router();

router.post('/register', validateRequest(registerSchema), asyncWrapper(AuthController.register));
router.post('/login', validateRequest(loginSchema), asyncWrapper(AuthController.login));

export default router;