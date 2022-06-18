import { NextFunction, Request, Response } from "express";
import { RequestWithAuth } from "../../../../Types/Request";
import {  addLogo, getShopByPhone } from "../../../../Model/Shop";
import { badRequest, serverError, successResponse } from "../../../../Utils/Http";

export const AddLogo = async (req:RequestWithAuth ,res:Response)=>{
    const result = addLogo(req.body.logoImageurl,req.user.id);
    if (!result) return serverError(res, "Faild to upload logo");
    return successResponse(res, "Logo uploaded successfuly", {});
}
