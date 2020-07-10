import { Router, Request, Response } from "express";
import { SubCategoryService } from "../services/SubCategoriesService"

export class SubCategoryControllers {
  private componentName: string = "SubCategoryControllers";
  private router: Router = Router();
  private service: any = new SubCategoryService();

  getRouter(): Router {
    this.router.get("/", async (request: Request, response: Response) => {
      try {
        let subCategories = await this.service.findAll();
        response.send({ status: 1, data: subCategories });
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
        let subCategories = await this.service.saveOne(reqData);
        response.send({ status: 1, data: subCategories });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });

    return this.router;
  }
}
