import mongoose, { Schema } from "mongoose";
const Services = new Schema({
    serviceId:String,
    shopId:String,
    name:String,
    description:String,
    sessionTime:Number,
    rate:Number
})
export default mongoose.model("Services", Services);