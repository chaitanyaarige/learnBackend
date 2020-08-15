import { Request, Response } from "express";
import * as jwt from "jsonwebtoken"

const authenticateJWT = (req:Request, res: Response, next: any) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const accessTokenSecret = 'CHAIT12345678'
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.status(403);
      }
      // req.user = user;
      next();
    });
  } else {
      res.status(401);
  }
};

export default authenticateJWT
