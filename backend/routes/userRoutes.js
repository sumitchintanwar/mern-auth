import express from "express";
import { verifyUser } from "../middlewares/verifyUser.js";
import { updateUser, userController } from "../controllers/userController.js";
const router = express.Router();
router.get("/", userController);
router.post("/update/:id", verifyUser, updateUser);
export default router;
