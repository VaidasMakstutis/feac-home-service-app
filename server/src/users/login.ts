import { userModel } from '../models/userModel';
import { generateToken } from '../utils/generateToken';
import { NextFunction, Request, Response } from 'express';
import { User } from '../types/User';

//export async function login(req: Request, res: Response, next: NextFunction): Promise<Response> {
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const findUser: User | null = await userModel.findOne({ email });
    if (!findUser) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const passwordIsCorrect = await findUser.isCorrectPassword(password);
    if (!passwordIsCorrect) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = generateToken({ id: findUser._id.toString() });

    return res.status(200).json({ status: 'success', token, user: findUser });
  } catch (error) {
    const typedError = error as Error;
    return res.status(500).json({ message: 'Error logging in.', error: typedError.message });
  }
}
