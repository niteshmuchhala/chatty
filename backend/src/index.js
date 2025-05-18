import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";  

import path from "path";
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// CORS Configuration
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://chatty-one-gamma.vercel.app", // Your Vercel frontend
    credentials: true,
  })
);


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Server Start
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  connectDB();
});
