import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGODB_URI);

  console.log("✅ MongoDB Connected");
  console.log("Database:", mongoose.connection.name);

  isConnected = true;
}