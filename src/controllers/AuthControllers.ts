import { Router, Request, Response } from "express";
import { AuthService } from "../services/AuthServices";
import { CustomerService } from "../services/CustomerService";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken"
import authenticateJWT from "../middleware/jwtverify"
// import { Transport, createTransport } from "nodemailer"
// import { hashSync, compareSync } from "bcrypt"


export class AuthControllers {
  private componentName: string = "AuthControllers";
  private router: Router = Router();
  private service: any = new AuthService();
  private customerService: any = new CustomerService();

  // public static DaysDiff(d1: Date, d2: Date): number {
  //   var t2: number = d2.getTime();
  //   var t1: number = d1.getTime();
  //   let diff: any = (t2 - t1) / (24 * 3600 * 1000);
  //   return parseInt(diff);
  // }

  getRouter(): Router {
    this.router.post("/login", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.body ? request.body : {};
        this.service.sessionInfo = request.body.sessionInfo;

        //Check if username and password are sent
         let { phone, password } = reqData;
         if (!(phone && password)) {
           return response.status(401).send({error: 'Please enter phone and password'});
         }

        let existingCustomer = await this.customerService.findByPhone(reqData.phone);
        if(!existingCustomer) {
          return response.status(400).send({ data: 'Customer Not Exists'});
        }  else {
           const currentPassword = reqData.password;
           if (!bcrypt.compareSync(currentPassword, existingCustomer.password, )) {
             response.status(401).send({ status: 'The Current Password is Wrong' });
           } else {
             // Generate an access token
             const accessTokenSecret = 'CHAIT12345678'
             let expires_at = new Date().toISOString();
             const token = jwt.sign({ sub: existingCustomer.id }, accessTokenSecret, { expiresIn: '1d' });
             let tokendata = { existingCustomer, token, expires_at}
             let saveData = {
              expires_at,
              is_active: true,
              customer_id: existingCustomer.id,
              created_at: expires_at
             }
             await this.service.saveOne(saveData);
             response.status(200).send(tokendata);
           }
        }
      } catch (error) {
        response.status(500).send({error: 'Internal Server Error catch'});
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
