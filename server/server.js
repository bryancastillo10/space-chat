import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Local Imports
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/user.routes.js";
import profileRoutes from "./routes/profileinfo.routes.js";
import connectToDb from "./db/connectMongo.js";
import { app, server } from "./socket/socket.js";

// Declared Variables
dotenv.config();
const PORT = process.env.PORT || 5000;

// Test Run
app.get("/", (req, res) => {
  res.send("Space Chat Server is Ready");
});

// Middleware
app.use(express.json()); // to parse the incoming requests with JSON payloads
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profileinfo", profileRoutes);

server.listen(PORT, () => {
  connectToDb();
  console.log(`Listening on port ${PORT}`);
});
