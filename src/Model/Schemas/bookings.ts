import { number } from "joi";
import mongoose, { Schema } from "mongoose";

const Booking = new Schema({
    shopId: String,
    date: String,
    seatNumber: Number,
    startTime: Number,

})
export default mongoose.model("Booking", Booking);