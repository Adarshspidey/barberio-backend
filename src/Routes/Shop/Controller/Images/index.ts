import { NextFunction, Request, Response } from "express";
import { RequestWithAuth } from "../../../../Types/Request";
import {  addImages, getShopByPhone } from "../../../../Model/Shop";
import { badRequest, serverError, successResponse } from "../../../../Utils/Http";

export const AddImages = async (req:RequestWithAuth,res:Response)=>{
    const result = addImages(req.body,req.user.id);
    if (!result) return serverError(res, "Faild to upload images");
    return successResponse(res, "Image uploaded successfuly", {});
}
