import { Router, Request, Response } from "express";
import { AuthService } from "../services/AuthServices";
import { CustomerService } from "../services/CustomerService";
import bcrypt from "bcrypt";
// import * as jwt from "jsonwebtoken"
// import { Transport, createTransport } from "nodemailer"
// import { hashSync, compareSync } from "bcrypt"

export class AuthControllers {
  private componentName: string = "AuthControllers";
  private router: Router = Router();
  private service: any = new AuthService();
  private customerService: any = new CustomerService();

  getRouter(): Router {
    this.router.post("/login", async (request: Request, response: Response) => {
      try {
        let reqData: any
        reqData = request.body ? request.body : {}
        this.service.sessionInfo = request.body.sessionInfo

        // Check if username and password are sent
        let { phone, password } = reqData
        if (!(phone && password)) {
          return response.status(401).send({error: 'Please enter phone and password'})
        }

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
        let reqData: any
        reqData = request.body ? request.body : {}
        this.customerService.sessionInfo = request.body.sessionInfo
        let existingCustomer = await this.customerService.findByPhone(reqData.phone)
        if(existingCustomer) return response.status(401).send({ data: 'Customer Phone Exists'})
        const currentPassword = reqData.password
        const salt = bcrypt.genSaltSync(10)
        const currentPasswordHash = bcrypt.hashSync(currentPassword, salt)
        reqData.password = currentPasswordHash
        let customer = await this.customerService.saveOne(reqData)
        response.status(201).send({ customer })
      } catch (error) {
        console.log(error)
        response.status(400).send({ error })
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

    this.router.post("/forgot-password", async (request: Request, response: Response) => {
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
