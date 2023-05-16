import mongoose from "mongoose";
import { config } from 'dotenv';
config();

const connectToDatabase = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable is not defined");
    }
    
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log("Connection successful");
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export default connectToDatabase;
