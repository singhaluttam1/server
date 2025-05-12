import mongoose from "mongoose";

export const connectDB = async () => {
    console.log(process.env.MONGODB_URI)
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};