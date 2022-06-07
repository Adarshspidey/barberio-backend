import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import { joiValidateMiddleware } from "../../../Utilits/MiddleWare";
import otp from "../../../Validation/Joi/Otp";
const schema = Joi.object({
  otp: otp.JoiPhoneOtp,
  phone: otp.JoiShopPhone,
});

const validate = (req: Request, res: Response, next: NextFunction) =>
  joiValidateMiddleware(req, res, next, schema);

export default validate;
