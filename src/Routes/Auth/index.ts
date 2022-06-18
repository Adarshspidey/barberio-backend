import express from "express";
import SignUp from "./Controllers/SignUp";
const router = express.Router();
import SignUpValidation from "./Validation/signUp";
import LoginValidation from "./Validation/login";
import OtpValidation from "./Validation/otp";
import Login, { IsUserExist } from "./Controllers/Login";
import Otp, { IsOtpVerified } from "./Controllers/Otp";
import { validationSuccess } from "../../Utils/MiddleWare";

router.post("/sign-up/validate", SignUpValidation,validationSuccess
);
router.post("/sign-up", SignUpValidation, SignUp);

router.post("/login", LoginValidation, IsUserExist, Login);

router.get("/forgot-password", (req, res) => {
  res.send("Forgot password");
});

router.post("/otp-verification", OtpValidation, IsOtpVerified, Otp);

export default router;
