import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import { JoiLocation } from "../../../Validation/Joi/Common";
import { joiValidateMiddleware } from "../../../Utilits/MiddleWare";
import shop from "../../../Validation/Joi/Shop";
const schema = Joi.object({
    address:shop.JoiShopAddress,
    location: JoiLocation
  });
  
  const validate = (req: Request, res: Response, next: NextFunction) =>
    joiValidateMiddleware(req, res, next, schema);

  export default validate;