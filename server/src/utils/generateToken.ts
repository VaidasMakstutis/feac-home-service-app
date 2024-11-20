import jwt from 'jsonwebtoken';

const expiresIn = '90d';

export function generateToken(payload: { id: string }) {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn });
  return token;
}
