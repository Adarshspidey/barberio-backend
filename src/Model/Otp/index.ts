import { generateOtp } from "../../Utilits/Generator";
import Otp from "../Schemas/otp";

const createOtp = async (phone: string) => {
  const otp = generateOtp();
  const result = await Otp.create({ otp, phone });
  console.log(otp);
  if (result) return true;
  return false;
};

const VerifyByOtp = async (phone: string, otp: string) => {
  const shop = await Otp.findOne({ phone, otp });
  if (!shop) return false;
  return shop;
};

export { createOtp, VerifyByOtp };
