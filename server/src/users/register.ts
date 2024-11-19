import { userModel } from '../models/userModel';
import { userSchema } from '../utils/validateUser';
import { Request, Response, NextFunction } from 'express';

//export async function register(req: Request, res: Response, next: NextFunction): Promise<Response> {
export async function register(req: Request, res: Response, next: NextFunction): Promise<any> {
  const userData = req.body;

  // Joi validation
  const { error } = userSchema.validate(userData);
  if (error) {
    return res.status(400).json({
      error: 'Validation failed',
      message: error.details.map((e) => e.message),
    });
  }

  const findUser = await userModel.findOne({ email: userData.email });
  if (findUser) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  try {
    const createdUser = new userModel(userData);
    await createdUser.save();

    return res.status(201).json({
      message: 'User registered successfully',
      userData: createdUser,
    });
  } catch (error) {
    const typedError = error as Error;
    return res.status(500).json({ message: 'Error registering new user.', error: typedError.message });
  }
}
