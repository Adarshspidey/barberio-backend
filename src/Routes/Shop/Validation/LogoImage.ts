import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import { joiValidateMiddleware } from "../../../Utils/MiddleWare";
import shop from "../../../Validation/Joi/Shop";
const schema = Joi.object({
    logoImageurl: shop.JoiShopLogoImageurl

  });

  const validate = (req: Request, res: Response, next: NextFunction) =>
    joiValidateMiddleware(req, res, next, schema);

  export default validate;