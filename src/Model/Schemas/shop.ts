import { number } from "joi";
import mongoose, { Schema } from "mongoose";
import { Location } from "./commen";

const Shop = new Schema({
  shopId:String,
  name: String,
  phone: String,
  registrationNumber: String,
  ownerName: String,
  location: Location,
  address: String,
  coverPictures: [String],
  logos: [String],
  images: [String],
  workingDays: [String],
  defaultIntervals: [String],
  defaultTiming: String,
  startTime:Number,
  endTime:Number,
});

export default mongoose.model("Shop", Shop);
