import errorHandler from "../middlewares/errorHandler.js";
import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

const signupController = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    // next(errorHandler(300, err.message));
    next(err);
    // console.error("Signup error:", err.message);
    // res.status(500).json({ error: err.message });
  }
};

export default signupController;
