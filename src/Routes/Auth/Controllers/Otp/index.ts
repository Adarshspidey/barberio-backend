import { NextFunction, Request, Response } from "express";
import { badRequest } from "../../../../Utilits/Http";
import { VerifyByOtp } from "../../../../Model/Otp";
import { generateToken } from "../../../../Utilits/Jwt";
import { successResponse, serverError } from "../../../../Utilits/Http";

export const IsOtpVerified = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await VerifyByOtp(req.body.phone, req.body.otp);
  if (!result)
    return badRequest(res, "bad request", [
      {
        messege: "Otp Invalid",
        path: "otp",
      },
    ]);
  return next();
};

const Otp = async (req: Request, res: Response) => {
  const token = generateToken({ phone: req.body.phone, permissions: ["user"] });
  return successResponse(res, "Yes", { token });
};

export default Otp;
