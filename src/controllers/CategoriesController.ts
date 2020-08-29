import { Router, Request, Response } from "express";
import { CategoriesService } from "../services/CategoriesService"

export class CategoryControllers {
  private componentName: string = "CategoryControllers";
  private router: Router = Router();
  private service: any = new CategoriesService();

  getRouter(): Router {
    this.router.get("/", async (request: Request, response: Response) => {
      try {
        let categories = await this.service.findAll();
        response.status(200).send({ categories });
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
        let categories = await this.service.saveOne(reqData);
        response.status(200).send({ categories });
      } catch (error) {
        console.log(error);
        response.status(400).send({ error });
      }
    });

    return this.router;
  }
}
