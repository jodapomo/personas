import mongoose from 'mongoose';

export const connect = async () => {
  const MONGO_URL = process.env.MONGO_URL || '';

  await mongoose.connect(MONGO_URL);
};

export const close = async () => {
  await mongoose.connection.close();
};
