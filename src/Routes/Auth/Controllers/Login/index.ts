import { NextFunction, Request, Response } from "express";
import {  getShopByPhone } from "../../../../Model/Shop";
import { badRequest } from "../../../../Utilits/Http";

export const IsUserExist = async (req: Request, res: Response,next:NextFunction) => {
   const result = await getShopByPhone(req.body.phone);
   if(!result) return badRequest(res,"bad requist",[{
       messege:"User desnot exist",
       path: "phone"
   }])
   return next();
};


const Login = async(req:Request,res:Response)=>{
    res.send("Logged In")
}

export default Login;