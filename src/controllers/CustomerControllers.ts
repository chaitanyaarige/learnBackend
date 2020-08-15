import { Router, Request, Response } from "express";
import { CustomerService } from "../services/CustomerService"

export class CustomerControllers {
  private componentName: string = "CustomerControllers";
  private router: Router = Router();
  private service: any = new CustomerService();

  getRouter(): Router {
    this.router.get("/", async (request: Request, response: Response) => {
      // NEED to be admin or doctor to see all Customers
      try {
        let customers = await this.service.findAll();
        response.status(200).send({ customers });
      } catch (error) {
        console.log(error);
        response.status(400).send({ error });
      }
    });

    this.router.get("/:id", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.params ? request.params : {};
        let customer = await this.service.findOne(reqData);
        response.status(200).send({ customer });
      } catch (error) {
        console.log(error);
        response.status(400).send({ error });
      }
    });

    this.router.get("/delete", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.params ? request.params : {};
        let customer = await this.service.findOne(reqData);
        response.status(200).send({ customer });
      } catch (error) {
        console.log(error);
        response.status(400).send({ error });
      }
    });

    return this.router;
  }
}
