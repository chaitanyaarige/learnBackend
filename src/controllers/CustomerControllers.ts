import { Router, Request, Response } from "express";
import { CustomerService } from "../services/CustomerService"
import bcrypt from "bcrypt";

export class CustomerControllers {
  private componentName: string = "CustomerControllers";
  private router: Router = Router();
  private service: any = new CustomerService();

  getRouter(): Router {
    this.router.get("/", async (request: Request, response: Response) => {
      // NEED to be admin or doctor to see all Customers
      try {
        let customer = await this.service.findAll();
        response.send({ status: 1, data: customer });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });

    this.router.get("/:id", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.param ? request.body : {};
        console.log(reqData)
        let customer = await this.service.findOne(reqData.id );
        response.send({ status: 1, data: customer });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });

    this.router.post("/", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.body ? request.body : {};
        this.service.sessionInfo = request.body.sessionInfo;

        // Customer.findOne({
          // where: {
              // email: req.body.email
        // if exists - return user exists - else - encrypt password
        const currentpPassword = reqData.password
        const salt = bcrypt.genSaltSync(10);
        const currentPasswordHash = bcrypt.hashSync(currentpPassword, salt);
        // if (!bcrypt.compareSync(oldPassword, currentPasswordHash)) {
        //   console.log("The Current Password is Wrong");
        // }
        console.log(currentPasswordHash)
        reqData.password = currentPasswordHash
        let customer = await this.service.saveOne(reqData);
        response.send({ status: 1, data: customer });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });

    return this.router;
  }
}
