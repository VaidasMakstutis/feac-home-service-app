import express from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import { categoriesRouter } from './routes/categoryRoutes';
import { businessesRouter } from './routes/businessRoutes';
import { bookingsRouter } from './routes/bookingRoutes';
import { authRouter } from './routes/authRoutes';
import { connectToDb, PORT } from './db';
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/categories', categoriesRouter);
app.use('/api/businesses', businessesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.json('Hello World!');
});

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});