import { NextFunction, Request, Response } from "express";
import { RequestWithAuth } from "../../../../Types/Request";
import {  addCoverImage, getShopByPhone, shopWorkTime } from "../../../../Model/Shop";
import { badRequest, serverError, successResponse } from "../../../../Utils/Http";

export const ScheduleWorkTime = async (req:RequestWithAuth ,res:Response)=>{
    const result = shopWorkTime(req.body.coverImageUrl,req.user.id);
    if (!result) return serverError(res, "Failed to enter work time");
    return successResponse(res, "data uploaded successfully", {});
}

