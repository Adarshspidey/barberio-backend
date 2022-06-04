import Joi from "joi";

const JoiName = (Entity: string = "Name") =>
  Joi.string()
    .regex(/^[A-Za-z][A-Za-z.\s]+$/)
    .min(3)
    .max(50)
    .messages({
      "string.base": `${Entity} must be a string`,
      "any.required": `${Entity} is required`,
      "string.empty": `${Entity} must not be empty`,
      "string.pattern.base": `${Entity} must be a valid name`,
      "string.min": `${Entity} must be at least 3 characters`,
      "string.max": `${Entity} must be at most 50 characters`,
    });

const JoiRequiredName = (Entity?: string) => JoiName(Entity).required();

const JoiPhone = (Entity = "Phone")=>
  Joi.string()
  .length(10)
  .pattern(/^[0-9]+$/)
  .messages({
    "string.empty": `${Entity} cannot be empty`,
    "any.required": `${Entity} is required`,
    "string.length": `${Entity} must be 10 digit` ,
    "string.pattern.base": `${Entity} must be number`,
    "string.base": `${Entity} must be a number`,
  })

  const JoiRequiredPhone = (Entity?: string) => JoiPhone(Entity).required();

  const JoiRequiredRegistrNumber = (Entity?: string) => JoiPhone(Entity).required();

  const JoiAddress = (Entity = "Address") =>
    Joi.string()
    .messages({
      "string.empty": `${Entity} cannot be empty`,
      "any.required": `${Entity} is required`,
    })

    const JoiRequiredAddress = (Entity?: string) => JoiAddress(Entity).required();
    
    const JoiLocation = Joi.object().keys({
    latitude: Joi.number().required(),
    longitude: Joi.number().required()
  }).required();

  const JoiOtp = (Entity = "OTP")=>
  Joi.string()
  .length(6)
  .pattern(/^[0-9]+$/)
  .required()
  .messages({
    "string.empty": `${Entity} cannot empty`,
    "any.required" : `${Entity} is required`,
    "string.length" : `${Entity} must be 6 digits`,
    "string.pattern.base" : `${Entity} must be a number`,
  });

  const JoiRequiredOtp = (Entity?: string) => JoiOtp(Entity).required();

  const JoiFileUrl = (Entity : string = "File URL") => 
  Joi.string()
  .regex(/^[A-Za-z][A-Za-z.\s]+$/)
    .min(3)
    .max(50)
  .messages({
    "string.min": `${Entity} must be at least 3 characters`,
    "string.max": `${Entity} must be at most 50 characters`,
    "string.empty": `${Entity} cannot be empty`,
    "any.required": `${Entity} is required`,
  })
  const JoiRequiredFileUrl = (Entity?: string) => JoiFileUrl(Entity).required();

  const JoiFileUrls = (Entity:string = "File Urls"):Joi.ArraySchema=>
  Joi.array()
  .items(JoiFileUrl(Entity))
  .unique((a, b)=>a===b)
  .messages({
    "array.includes": `${Entity}s is not a valid Input`,
    "array.include.ReqiredUnknowns" : `${Entity}s is not a valid Input`,
    "array.unique": `${Entity}s cannot be same`
  });
 
export { JoiName, JoiRequiredName, JoiPhone, JoiAddress, JoiRequiredAddress, JoiRequiredPhone,JoiRequiredRegistrNumber, JoiOtp, JoiRequiredOtp, JoiLocation, JoiFileUrl, JoiRequiredFileUrl, JoiFileUrls};

