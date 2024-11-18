import express from 'express';
import { login } from '../users/login';
import { register } from '../users/register';

export const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
