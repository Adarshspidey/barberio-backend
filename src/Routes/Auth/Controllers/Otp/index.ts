import { NextFunction, Request, Response } from "express";
import { badRequest } from "../../../../Utils/Http";
import { VerifyByOtp } from "../../../../Model/Otp";
import { generateToken } from "../../../../Utils/Jwt";
import { successResponse, serverError } from "../../../../Utils/Http";
import { permissions } from "../../../../Config";
import { getShopByPhone } from "../../../../Model/Shop";

export const IsOtpVerified = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await VerifyByOtp(req.body.phone, req.body.otp);
  if (!result)
    return badRequest(res, "bad request", [
      {
        message: "Sorry! you entered a wrong OTP!",
        path: "otp",
      },
    ]);
  return next();
};

const Otp = async (req: Request, res: Response) => {
  const shop = await getShopByPhone(req.body.phone);

  const token = generateToken({
    id: shop.shopId,
    permissions: [permissions.User],
  });
  return successResponse(res, "Otp Verified", { token });
};

export default Otp;
