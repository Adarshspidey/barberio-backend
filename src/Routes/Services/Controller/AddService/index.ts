import { Response } from "express";
import { RequestWithAuth } from "../../../../Types/Request";
import { badRequest, serverError, successResponse } from "../../../../Utilits/Http";
import { createService } from "../../../../Model/Service";

export const CreateService= async (req:RequestWithAuth ,res:Response)=>{
    const result = createService(req.body,req.user.id);
    if (!result) return serverError(res, "Faild to create service");
    return successResponse(res, "Service created successfuly", {});
}