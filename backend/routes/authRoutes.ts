// routes/authRoutes.ts
import { RequestHandler, Router } from 'express';
import {registerUser} from '../controllers/authController'
const router = Router();

router.post('/register', registerUser as RequestHandler);

export default router;  // Named export
