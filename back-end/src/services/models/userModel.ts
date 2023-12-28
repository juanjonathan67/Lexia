import mongoose from "mongoose";

// User model
interface IUser {
  fullname: string;
  username: string;
  email: string;
  password: string;
  progress: number;
}

module.exports = mongoose.model<IUser>('user_cred', new mongoose.Schema<IUser>({
  fullname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true },
  progress: {type: Number},
}));