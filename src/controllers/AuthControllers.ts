import { Router, Request, Response } from "express";
import { AuthService } from "../services/AuthServices";
import { CustomerService } from "../services/CustomerService"

export class AuthControllers {
  private componentName: string = "AuthControllers";
  private router: Router = Router();
  private service: any = new AuthService();
  private customerService: any = new CustomerService();

  getRouter(): Router {
    this.router.post("/login", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.body ? request.body : {};
        this.service.sessionInfo = request.body.sessionInfo;
        // let auth = await this.service.findOne(reqData);
        // response.send({ status: 1, data: auth });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });
    // SignUp a new User, if phone does not exist
    this.router.post("/register", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.body ? request.body : {};
        this.service.sessionInfo = request.body.sessionInfo;
        let auth = await this.service.saveOne(reqData);
        response.send({ status: 1, data: auth });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });

    this.router.post("/change-password", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.body ? request.body : {};
        this.service.sessionInfo = request.body.sessionInfo;
        let auth = await this.service.saveOne(reqData);
        response.send({ status: 1, data: auth });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });

    return this.router;
  }
}
