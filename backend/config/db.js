import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Attempt to connect using the URI from our .env file
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`📡 MongoDB Cluster Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1); // Crash the server immediately if database link fails
  }
};

export default connectDB;