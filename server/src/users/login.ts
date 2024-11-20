import { userModel } from '../models/userModel';
import { generateToken } from '../utils/generateToken';
import { NextFunction, Request, Response } from 'express';
import { User } from '../types/User';

// type LoginRequestBody = {
//   email: string;
//   password: string;
// };

export async function login(req: Request<{}, {}, User>, res: Response, next: NextFunction): Promise<void> {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: 'Please provide email and password' });
      return;
    }

    const findUser: User | null = await userModel.findOne({ email });
    if (!findUser) {
      res.status(401).json({ message: 'Incorrect email or password' });
      return;
    }

    const passwordIsCorrect = await findUser.isCorrectPassword(password);
    if (!passwordIsCorrect) {
      res.status(401).json({ message: 'Incorrect email or password' });
      return;
    }

    const token = generateToken({ id: findUser._id.toString() });

    res.status(200).json({ status: 'success', token, user: findUser });
    return;
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ message: 'Error logging in.', error: typedError.message });
    return;
  }
}
