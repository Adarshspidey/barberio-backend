import { NextFunction, Request, Response } from "express";
import {  getShopByPhone } from "../../../../Model/Shop";
import { badRequest } from "../../../../Utilits/Http";

export const AddLogo = async (req:Request ,res:Response)=>{
    res.send("Logo")
}
