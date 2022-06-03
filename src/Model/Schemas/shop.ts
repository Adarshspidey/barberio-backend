import mongoose, { Schema } from "mongoose";

const Shop = new Schema({
  name: String,
  phone: String,
  registrationNumber: String,
  ownerName: String,
  location: String,
  address: String,
  coverPictures: [String],
  logos: [String],
  images: [String],
  workingDays: [String],
  defaultIntervals: [String],
  defaultTiming: String,
});

export default mongoose.model("Shop", Shop);
