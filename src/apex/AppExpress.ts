import express from "express";
import { json, urlencoded } from "body-parser";
import { ProductControllers } from "../controllers/ProductControllers";
import { CategoryControllers } from "../controllers/CategoriesController";

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

    let productController = new ProductControllers();
    this.express.use("/api/products", productController.getRouter());

    let categoriesController = new CategoryControllers();
    this.express.use("/api/categories", categoriesController.getRouter())
  }
}
