import express from "express";
import {
  signupController,
  signinController,
  googleController,
  signout,
} from "../controllers/authController.js";

const router = express.Router();
router.post("/signup", signupController);
router.post("/signin", signinController);
router.post("/google", googleController);
router.get("/signout", signout);
export default router;
