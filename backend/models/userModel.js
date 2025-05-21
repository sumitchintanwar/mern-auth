import mongoose from "mongoose";
//username, email, password, isAdmin

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    photo: {
      type: String,
      default:
        "https://res.cloudinary.com/dqj0xgk8v/image/upload/v1698230982/blank-profile-picture-973460_640_1_ue3z4h.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
//User is the name of the collection in MongoDB. It must be singular and Uppercase( "U")
export default User;
