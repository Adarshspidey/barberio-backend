import { NextFunction, Request, Response } from "express";
import { RequestWithAuth } from "../../../../Types/Request";
import {  addCoverImage, getShopByPhone, shopWorkTime } from "../../../../Model/Shop";
import { badRequest, serverError, successResponse } from "../../../../Utilits/Http";

export const SheduleWorktime = async (req:RequestWithAuth ,res:Response)=>{
    const result = shopWorkTime(req.body.coverImageurl,req.user.id);
    if (!result) return serverError(res, "Faild to enter work time");
    return successResponse(res, "data uploaded successfuly", {});
}

