import { Router, Request, Response } from "express";
import { SupplierService } from "../services/SupplierService"

export class SupplierControllers {
  private componentName: string = "SupplierControllers";
  private router: Router = Router();
  private service: any = new SupplierService();

  getRouter(): Router {
    this.router.get("/", async (request: Request, response: Response) => {
      try {
        let supplier = await this.service.findAll();
        response.status(200).send({ supplier });
      } catch (error) {
        console.log(error);
        response.status(400).send({ error });
      }
    });

    this.router.post("/", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.body ? request.body : {};
        this.service.sessionInfo = request.body.sessionInfo;
        let supplier = await this.service.saveOne(reqData);
        response.status(200).send({ supplier });
      } catch (error) {
        console.log(error);
        response.status(400).send({ error });
      }
    });

    return this.router;
  }
}
