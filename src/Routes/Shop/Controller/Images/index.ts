import { NextFunction, Request, Response } from "express";
import {  getShopByPhone } from "../../../../Model/Shop";
import { badRequest } from "../../../../Utilits/Http";

export const AddImages = async (req:Request ,res:Response)=>{
    res.send("Image")
}
