import { Request } from "express";
import { TokenType } from "../../Types/Token";

export interface RequestWithAuth extends Request {
  user: TokenType;
}
