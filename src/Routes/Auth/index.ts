import express from "express";
import SignUp from "./Controllers/SignUp";
const router = express.Router();
import SignUpValidation from "./Validation/signUp";

router.post("/sign-up", SignUpValidation, SignUp);

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
