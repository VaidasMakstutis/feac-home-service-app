import { userModel } from './model';
import { userSchema } from './validate';
import { Request, Response, NextFunction } from 'express';
import { User } from './types';

// type RegisterRequestBody = {
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// };

export async function register(req: Request<{}, {}, User>, res: Response, next: NextFunction): Promise<void> {
  const userData = req.body;

  // Joi validation
  const { error } = userSchema.validate(userData);
  if (error) {
    res.status(400).json({
      error: 'Validation failed',
      message: error.details.map((e) => e.message),
    });
    return;
  }

  const findUser: User | null = await userModel.findOne({ email: userData.email });
  if (findUser) {
    res.status(400).json({ message: 'User with this email already exists' });
    return;
  }

  try {
    const createdUser = new userModel(userData);
    await createdUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      userData: createdUser,
    });
    return;
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ message: 'Error registering new user.', error: typedError.message });
    next(error);
  }
}
