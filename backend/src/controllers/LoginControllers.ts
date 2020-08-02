import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Router, Request, Response } from "express";
import { LoginService } from "../services/LoginService";

export class LoginControllers {
  private loginControllers: string = "LoginControllers";
  private router: Router = Router();
  private service: any = new LoginService();

  getRouter(): Router {
    this.router.post("/", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.body && request.body.email && request.body.password ? request.body : null;
        if(!reqData) return
        reqData.password = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(8))

// validate password
// validate email
// validate same password, if changing
// create new User ?

        this.service.sessionInfo = request.body.sessionInfo;
        let login = await this.service.saveOne(reqData);
        response.send({ status: 1, data: login });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });

    return this.router;
  }
}
