import { NextFunction, Request, Response } from "express";
import { createOtp } from "../../../../Model/Otp";
import { getShopByPhone } from "../../../../Model/Shop";
import { badRequest, successResponse } from "../../../../Utils/Http";

export const IsUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getShopByPhone(req.body.phone);
  if (!result)
    return badRequest(res, "bad request", [
      {
        message: "User desnot exist",
        path: "phone",
      },
    ]);
  return next();
};

const Login = async (req: Request, res: Response) => {
  createOtp(req.body.phone);
  return successResponse(res, "Login Successfully", {});
};

export default Login;
