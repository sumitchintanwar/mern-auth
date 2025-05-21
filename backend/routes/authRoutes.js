import express from "express";
import {
  signupController,
  signinController,
  googleController,
} from "../controllers/authController.js";

const router = express.Router();
router.post("/signup", signupController);
router.post("/signin", signinController);
router.post("/google", googleController);
export default router;
