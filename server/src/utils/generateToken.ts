import jwt from 'jsonwebtoken';

const expiresIn = process.env.JWT_EXPIRATION;
const SECRET = process.env.JWT_SECRET;

export function generateToken(payload: { id: string }) {
  if (!SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const token = jwt.sign(payload, SECRET, { expiresIn });
  return token;
}
