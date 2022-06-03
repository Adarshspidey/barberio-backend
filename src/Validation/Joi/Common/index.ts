import Joi from "joi";

const JoiName = (Entity: String = "Name") =>
  Joi.string()
    .regex(/^[A-Za-z][A-Za-z.\s]+$/)
    .min(4)
    .max(16)
    .messages({
      "string.base": `${Entity} must be a string`,
      "any.required": `${Entity} is required`,
      "string.empty": `${Entity} must not be empty`,
      "string.pattern.base": `${Entity} must be a valid name`,
      "string.min": `${Entity} must be at least 4 characters`,
      "string.max": `${Entity} must be at most 16 characters`,
    });

const JoiRequiredName = (Entity?: String) => JoiName(Entity).required();

export { JoiName, JoiRequiredName };
