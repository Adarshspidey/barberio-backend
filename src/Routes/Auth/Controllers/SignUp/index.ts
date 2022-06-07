import { Request, Response } from "express";
import { createOtp } from "../../../../Model/Otp";
import { createShop } from "../../../../Model/Shop";
import { successResponse, serverError } from "../../../../Utilits/Http";

const SignUp = async (req: Request, res: Response) => {
  const result = await createShop(req.body);
  createOtp(req.body.phone);
  if (!result) return serverError(res, "Hello");
  return successResponse(res, "Yes", {});
};

export default SignUp;
