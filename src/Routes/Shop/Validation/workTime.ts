import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import { joiValidateMiddleware } from "../../../Utilits/MiddleWare";
import shop from "../../../Validation/Joi/Shop";
const schema = Joi.object({
    startTime:shop.JoiStartTime,
    endTime:shop.JoiEndTime

  });

  const validate = (req: Request, res: Response, next: NextFunction) =>
    joiValidateMiddleware(req, res, next, schema);

  export default validate;