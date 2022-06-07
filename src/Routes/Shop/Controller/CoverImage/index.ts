import { NextFunction, Request, Response } from "express";
import { RequestWithAuth } from "../../../../Types/Request";
import {  addCoverImage, getShopByPhone } from "../../../../Model/Shop";
import { badRequest, serverError, successResponse } from "../../../../Utilits/Http";

export const AddCoverImage = async (req:RequestWithAuth ,res:Response)=>{
    const result = addCoverImage(req.body.coverImageurl,req.user.id);
    if (!result) return serverError(res, "Faild to upload Cover image");
    return successResponse(res, "Cover image uploaded successfuly", {});
}

