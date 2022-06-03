import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import { badRequest } from "../Http";
import { getErrorDetails } from "../Map";

const joiValidateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
  schema: Joi.ObjectSchema
) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) return badRequest(res, "Bad Request", getErrorDetails(error));
  next();
};

export { joiValidateMiddleware };
