import express from 'express';
import { login } from './login';
import { register } from './register';

export const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
