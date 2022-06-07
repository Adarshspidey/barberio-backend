import { sign, verify } from "jsonwebtoken";
import { TokenType } from "../../Types/Token";

const generateToken = (data: {}) => {
  const accessToken = sign(
    {
      ...data,
    },
    process.env.TOKEN_SECRET
  );
  return accessToken;
};

const verifyToken = (token: string): Promise<TokenType> =>
  new Promise((resolve, reject) => {
    verify(token, process.env.TOKEN_SECRET, (err: any, decoded: TokenType) => {
      if (err) {
        return reject(err);
      } else {
        resolve(decoded);
      }
    });
  });

export { generateToken, verifyToken };
