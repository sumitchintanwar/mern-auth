import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
const PORT = process.env.PORT || 5000;
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRoutes);

// app.get("/", (req, res) => {
//   res.json({ message: "API is running..." });
// });
