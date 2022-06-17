import express from "express";
import SignUp from "./Controllers/SignUp";
const router = express.Router();
import SignUpValidation from "./Validation/signUp";
import LoginValidation from "./Validation/login";
import OtpValidation from "./Validation/otp";
import Login, { IsUserExist } from "./Controllers/Login";
import Otp, { IsOtpVerified } from "./Controllers/Otp";

router.post("/sign-up/validate", SignUpValidation, (req, res) => {
  res.status(200).json({
    message: "SignUp Validation Successfully",
    data: {},
  });
});
router.post("/sign-up", SignUpValidation, SignUp);

router.post("/login/validate", LoginValidation, (req, res) => {
  res.status(200).json({
    message: "Login Validation Successfully",
    data: {},
  });
});
router.post("/login", LoginValidation, IsUserExist, Login);

router.get("/forgot-password", (req, res) => {
  res.send("Forgot password");
});

router.post("/otp/validate", OtpValidation, (req, res) => {
  res.status(200).json({
    message: "OTP Verified Successfully",
    data: {},
  });
});
router.post("/otp-verification", OtpValidation, IsOtpVerified, Otp);

export default router;
