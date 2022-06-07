import { NextFunction, Request, Response } from "express";
import { createOtp } from "../../../../Model/Otp";
import { getShopByPhone } from "../../../../Model/Shop";
import { badRequest } from "../../../../Utilits/Http";

export const IsUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getShopByPhone(req.body.phone);
  if (!result)
    return badRequest(res, "bad request", [
      {
        messege: "User desnot exist",
        path: "phone",
      },
    ]);
  return next();
};

const Login = async (req: Request, res: Response) => {
  createOtp(req.body.phone);
  res.send("Logged In");
};

export default Login;
