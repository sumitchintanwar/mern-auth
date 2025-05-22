import User from "../models/userModel.js";
import errorHandler from "../middlewares/errorHandler.js";
import bcryptjs from "bcryptjs";
export const userController = (req, res) => {
  res.json({ message: "API is running..." });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    // return res.status(401).json("You can only update your password");
    return next(errorHandler(401, "You can only update your account"));
  }
  try {
    if (req.body.password) {
      req.body.password = await bcryptjs.hash(req.body.password, 12);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...userWithoutPassword } = updatedUser._doc;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can delete only your account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User has been deleted...",
    });
  } catch (error) {
    next(error);
  }
};
