import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import { joiValidateMiddleware } from "../../../Utilits/MiddleWare";
import service from "../../../Validation/Joi/Service";
const schema = Joi.object({
    name: service.JoiServiceName,
    description: service.JoiServiceDescription,
    sessionTime: service.JoiServiceTime,
    rate: service.JoiServiceRate

  });

  const validate = (req: Request, res: Response, next: NextFunction) =>
    joiValidateMiddleware(req, res, next, schema);

  export default validate;