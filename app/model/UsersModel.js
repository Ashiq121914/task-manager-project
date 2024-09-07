import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: { type: String, required: true },
    otp: { type: String, default: 0 },
    password: { type: String, unique: true, required: true },
  },
  {
    // to automatically update time in the database table
    timestamps: true,
    versionKey: false,
  }
);

const Users = mongoose.model("users", UserSchema);

export default Users;
