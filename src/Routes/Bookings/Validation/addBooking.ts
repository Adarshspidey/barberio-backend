import { NextFunction, Response, Request } from "express";
import Joi from "joi";

import Bookings from "../../../Validation/Joi/Bookings";
import { joiValidateMiddleware } from "../../../Utilits/MiddleWare";
const schema = Joi.object({
    date:Bookings.JoiBookingDate,
    seatNumber:Bookings.JoiBookingSeatNumber,
    startTime:Bookings.JoiBookingTime

  });

  const validate = (req: Request, res: Response, next: NextFunction) =>
    joiValidateMiddleware(req, res, next, schema);

  export default validate;