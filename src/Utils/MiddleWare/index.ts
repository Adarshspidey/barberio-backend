import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import { RequestWithAuth } from "../../Types/Request";
import { verifyToken } from "../Jwt";
import { badRequest, successResponse, unauthorizedError } from "../Http";
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

const authMiddleware =
  (permission: string) =>
  async (req: RequestWithAuth, res: Response, next: NextFunction) => {
    if (!req.headers.authorization)
      return unauthorizedError(res, {
        error: "No authorized header found",
      });

    const token = req.headers.authorization.split(" ")[1];
    if (!token)
      return unauthorizedError(res, {
        error: "No token found",
      });

    try {
      const decoded = await verifyToken(token);

      if (!decoded.permissions.includes(permission)) {
        return unauthorizedError(res, {
          error: "You don't have permission to access this resource",
        });
      }
      req.user = decoded;
      return next();
    } catch (error) {
      return unauthorizedError(res, {
        error: "Invalid Token!",
      });
    }
  };

const validationSuccess = (req: Request, res: Response, ) => {
  successResponse(res,
    "Validation Success",
    {
    message: "Validation Success",
    data: {},
    }
  );
}

export { joiValidateMiddleware, authMiddleware, validationSuccess };
