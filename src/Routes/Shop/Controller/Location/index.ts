import { NextFunction, Request, Response } from "express";
import { RequestWithAuth } from "../../../../Types/Request";
import {  addLocation, getShopByPhone } from "../../../../Model/Shop";
import { badRequest, serverError, successResponse } from "../../../../Utilits/Http";

export const AddLocation = async (req:RequestWithAuth ,res:Response)=>{
    const result = addLocation(req.body,req.user.id);
    if (!result) return serverError(res, "Faild to update location");
    return successResponse(res, "Location updated successfuly", {});
    
}
