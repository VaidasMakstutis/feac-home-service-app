import express from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { categoriesRouter } from './categories/routes';
import { businessesRouter } from './businesses/routes';
import { bookingsRouter } from './bookings/routes';
import { authRouter } from './users/routes';
import { connectToDb, PORT } from './db';
dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/categories', categoriesRouter);
app.use('/api/businesses', businessesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/auth', authRouter);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
