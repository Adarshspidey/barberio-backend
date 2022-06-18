import { Response } from "express";

const response = (
  res: Response,
  code: number,
  status: boolean,
  message: string,
  data: object
) => {
  res.status(code).send({
    status,
    message,
    data,
  });
};

const badRequest = (res: Response, message: string, data: object) => {
  response(res, 400, false, message, data);
};

const successResponse = (res: Response, message: string, data: object) => {
  response(res, 200, true, message, data);
};

const serverError = (res: Response, message: string, data?: object) => {
  response(res, 500, false, message, data);
};

const unauthorizedError = (res: Response, data: object) => {
  response(res, 401, false, "Unauthorized", data);
};

const notFoundError = (res: Response, data: object) => {
  response(res, 404, false, "Not Found", data);
};

export {
  badRequest,
  successResponse,
  serverError,
  unauthorizedError,
  notFoundError,
};
