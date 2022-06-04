import { NextFunction, Request, Response } from "express";
import {  getShopByPhone } from "../../../../Model/Shop";
import { badRequest } from "../../../../Utilits/Http";

export const AddLocation = async (req:Request ,res:Response)=>{
    res.send("Location")
}
