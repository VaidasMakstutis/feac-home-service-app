import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ?? 5000;

export const connectToDb = async () => {
  try {
    const url = process.env.MONGO_URI;
    if (url === undefined) return;
    await mongoose.connect(url, { dbName: 'home-service-app' });
    console.log('Connected to MongoDB with Mongoose');
  } catch (err) {
    console.error('Could not connect to the database', err);
    process.exit(1);
  }
};
