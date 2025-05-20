import errorHandler from "../middlewares/errorHandler.js";
import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const signupController = async (req, res, next) => {
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
    next(err);
  }
};
// next(errorHandler(300, err.message));
// console.error("Signup error:", err.message);
// res.status(500).json({ error: err.message });
export const signinController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email }); //User from userModel
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const isPasswordValid = bcryptjs.compareSync(password, validUser.password);
    if (!isPasswordValid) {
      return next(errorHandler(401, "Invalid credentials"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const { password: hashedPassword, ...userWithoutPassword } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        age: 24 * 60 * 60 * 1000, // 1 day
      })
      .status(200)
      .json(userWithoutPassword);
  } catch (err) {
    next(err);
  }
};

/*It is not ok to send the password towards the client*/
// res
//   .cookie("access_token", token, {
//     httpOnly: true,
//   })
//   .status(200);
// .json({
//   _id: validUser._id,
//   username: validUser.username,
//   email: validUser.email,
//   token,
// });
