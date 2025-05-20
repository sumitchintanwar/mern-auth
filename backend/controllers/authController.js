import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

const signupController = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,

  });{
    "error": "User validation failed: username: Path `username` is required., email: Path `email` is required."
}
  try {
    await newUser.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

export default signupController;
