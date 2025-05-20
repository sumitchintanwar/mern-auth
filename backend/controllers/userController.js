import userRoutes from "../routes/userRoutes.js";

const userController = (req, res) => {
  res.json({ message: "API is running..." });
};

export default userController;
