import { Response } from "express";
import { RequestWithAuth } from "../../../../Types/Request";
import { serverError, successResponse } from "../../../../Utilits/Http";
import { createBooking } from "../../../../Model/Booking";

export const CreateBookings= async (req:RequestWithAuth ,res:Response)=>{
    const result = createBooking(req.body,req.user.id);
    if (!result) return serverError(res, "Faild to create Booking");
    return successResponse(res, "Booking created successfuly", {});
}
 