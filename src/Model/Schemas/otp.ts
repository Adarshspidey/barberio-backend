import mongoose, { model, Schema } from "mongoose";

const Otp = new Schema({
  otp: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("OTP", Otp);
