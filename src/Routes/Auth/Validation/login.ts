import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import { joiValidateMiddleware } from "../../../Utils/MiddleWare";
import shop from "../../../Validation/Joi/Shop";
const schema = Joi.object({
    phone: shop.JoiShopPhone,
  });

const validate = (req: Request, res: Response, next: NextFunction) =>
    joiValidateMiddleware(req, res, next, schema);

  export default validate;