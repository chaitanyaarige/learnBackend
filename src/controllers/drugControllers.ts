import express from "express";
import { Router, Request, Response } from "express";
import { DrugsService } from "../services/DrugsService"


export class DrugControllers {
  private componentName: string = "DrugControllers";
  private router: Router = Router();
  private service: any = new DrugsService();

  getRouter(): Router {
    this.router.get("/", async (request: Request, response: Response) => {
      try {
        let drugs = await this.service.findAll();
        response.send({ status: 1, data: drugs });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });

    this.router.put("/", async (request: Request, response: Response) => {
      try {
        let reqData: any;
        reqData = request.body.data ? request.body.data : {};
        this.service.sessionInfo = request.body.sessionInfo;
        console.log(reqData, 'cont')
        let drugs = await this.service.saveOne(reqData);
        response.send({ status: 1, data: drugs });
      } catch (error) {
        console.log(error);
        response.send({ status: 0, error: error });
      }
    });

    return this.router;
  }
}
