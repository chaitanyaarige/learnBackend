import express from "express";
import { json, urlencoded } from "body-parser";
import { ProductControllers } from "../controllers/ProductControllers";
import { CategoryControllers } from "../controllers/CategoriesController";
import { SubCategoryControllers } from "../controllers/SubCategoriesController";
import { CitiesControllers } from "../controllers/CitiesControllers";
import { SupplierControllers } from "../controllers/SupplierControllers";
import { CustomerControllers } from "../controllers/CustomerControllers";
import { OrdersControllers } from "../controllers/OrdersControllers";

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

    this.express.use("/api/products", new ProductControllers().getRouter())
    this.express.use("/api/categories", new CategoryControllers().getRouter())
    this.express.use("/api/subcategories", new SubCategoryControllers().getRouter())
    this.express.use("/api/cities", new CitiesControllers().getRouter())
    this.express.use("/api/suppliers", new SupplierControllers().getRouter())
    this.express.use("/api/customers", new CustomerControllers().getRouter())
    this.express.use("/api/orders", new OrdersControllers().getRouter())
  }
}
