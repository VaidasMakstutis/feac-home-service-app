import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

const expiresIn = process.env.JWT_EXPIRATION;
const SECRET = process.env.JWT_SECRET;

export function generateToken(payload: Types.ObjectId) {
  if (!SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const token = jwt.sign(payload, SECRET, { expiresIn });
  return token;
}
