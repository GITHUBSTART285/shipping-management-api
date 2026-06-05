

console.log("SERVER FILE RUNNING");
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();
console.log(process.env.MSG91_AUTH_KEY);
// DB CONNECTION FUNCTION
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error(" DB Connection Error:", error.message);
    process.exit(1);
  }
};

// START SERVER AFTER DB CONNECT
const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();