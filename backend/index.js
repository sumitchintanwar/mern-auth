import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
// import path from "path";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
// const __dirname = path.resolve();
const app = express();
app.use(
  cors({
    origin: ["https://mern-auth-frontend-red-sigma.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());
// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    status: "error",
    success: false,
    message: message,
    statusCode: statusCode,
  });
});

// app.get("/", (req, res) => {
//   res.json({ message: "API is running..." });
// });
