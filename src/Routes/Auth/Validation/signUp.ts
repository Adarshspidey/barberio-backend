import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import { joiValidateMiddleware } from "../../../Utilits/MiddleWare";
import { JoiRequiredName } from "../../../Validation/Joi/Common";

const schema = Joi.object({
  name: JoiRequiredName("Shop Name"),
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .required(),
  registerNumber: Joi.string()
    .regex(/^[0-9]{10}$/)
    .required(),
  ownerName: JoiRequiredName("Owner Name"),
});

const validate = (req: Request, res: Response, next: NextFunction) =>
  joiValidateMiddleware(req, res, next, schema);

export default validate;
