import jwt from "jsonwebtoken";
import errorHandler from "./errorHandler.js";
export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    // return res.this.status(401).json("You need to login");
    return next(errorHandler(401, "You can not authenticated"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      // return res.status(403).json("Token is not valid");
      return next(errorHandler(403, "Invalid Token"));
    }
    req.user = user;
    next();
  });
};
