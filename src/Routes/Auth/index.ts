import express from "express";
import SignUp from "./Controllers/SignUp";
const router = express.Router();
import SignUpValidation from "./Validation/signUp";
import LoginValidation from "./Validation/login";
import Login,{ IsUserExist } from "./Controllers/Login";

router.post("/sign-up", SignUpValidation, SignUp);

router.post("/login",LoginValidation,IsUserExist,Login)

router.get("/login", (req, res) => {
  res.send("Login");
});

router.get("/forgot-password", (req, res) => {
  res.send("Forgot password");
});

router.get("/otp-verification", (req, res) => {
  res.send("Otp verification");
});

export default router;
