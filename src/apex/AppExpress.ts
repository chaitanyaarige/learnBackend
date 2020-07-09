import express from "express";
import { json, urlencoded } from "body-parser";
import { DrugControllers } from "../controllers/DrugControllers";
import { CategoriesController } from "../controllers/CategoriesController";

export default class AppExpress {
  public express: any;

  constructor() {
    this.express = express();
    this.express.use(json());
    this.mountRoutes();
  }

  public async mountRoutes() {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Website Application Main Route"
      });
    });
    this.express.use("/", router);

    let drugControllers = new DrugControllers();
    this.express.use("/api/drugs", drugControllers.getRouter());

    let categoriesController = new CategoriesController();
    this.express.use("/api/categories", categoriesController.getRouter())
  }
}
