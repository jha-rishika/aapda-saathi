import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`📡 MongoDB Cluster Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[DATABASE LOG CORRUPTION ERROR]: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;