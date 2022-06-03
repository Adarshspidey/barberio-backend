import { Request, Response } from "express";
import { createShop } from "../../../../Model/Shop";
import { successResponse } from "../../../../Utilits/Http";
import { serverError } from "../../../../Utilits/Http";

const SignUp = async (req: Request, res: Response) => {
  const result = await createShop(req.body);
  if (!result) return serverError(res, "Hello");
  return successResponse(res, "Yes", {});
};

export default SignUp;
