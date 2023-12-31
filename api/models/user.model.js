import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "Username already exists"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://https://th.bing.com/th/id/OIP.YeFjDDDXF1DwQ21c1rjl1QHaHw?pid=ImgDet&w=200&h=209&c=7&dpr=1.3",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
