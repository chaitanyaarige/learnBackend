import { Router, Request, Response } from "express";
import { CitiesService } from "../services/CitiesService"

export class CitiesControllers {
  private componentName: string = "CitiesControllers";
  private router: Router = Router();
  private service: any = new CitiesService();

  getRouter(): Router {
    this.router.get("/", async (request: Request, response: Response) => {
      try {
        let cities = await this.service.findAll();
        response.status(200).send({ cities });
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
        let cities = await this.service.saveOne(reqData);
        response.status(200).send({ cities });
      } catch (error) {
        console.log(error);
        response.status(400).send({ error });
      }
    });

    return this.router;
  }
}
