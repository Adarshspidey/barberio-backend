import Joi from "joi";

const getErrorDetails = (error: Joi.ValidationError) =>
  error.details.map(({ message, path}: Joi.ValidationErrorItem) => ({
    message,
    path: path.length < 2 ? path[0] : path,
  }));

export { getErrorDetails };
