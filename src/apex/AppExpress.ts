import express from "express";
import cors from 'cors';
import { json, urlencoded } from "body-parser";
// import { AuthControllers } from '../controllers/AuthControllers';
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
    this.chunkDataHandle();
  }

  public async mountRoutes() {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Website Application Main Route"
      });
    });
    this.express.use("/", router);
    this.express.use(cors())
    // this.express.use("/api/auth", new AuthControllers().getRouter())
    // this.express.use("/api/register", new AuthControllers().getRouter())
    this.express.use("/api/products", await new ProductControllers().getRouter())
    this.express.use("/api/categories", await new CategoryControllers().getRouter())
    this.express.use("/api/subcategories", await new SubCategoryControllers().getRouter())
    this.express.use("/api/cities", await new CitiesControllers().getRouter())
    this.express.use("/api/suppliers", await new SupplierControllers().getRouter())
    this.express.use("/api/customers", await new CustomerControllers().getRouter())
    this.express.use("/api/orders", await new OrdersControllers().getRouter())
  }


  private chunkDataHandle(): void {
    this.express.all("*", (req: any, res: express.Response, next: any) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
        res.setHeader("Access-Control-Allow-Headers", "accept, Content-Type, Authorization");
        res.setHeader('Access-Control-Allow-Credentials', "true");
        if (req.headers["content-type"] && req.headers["content-type"].indexOf("application/x-www-form-urlencoded") > -1) {
            this.parsePost(req, (data: any) => {
                if (data && data != "") {
                    req.body = data;
                }
                // this.addSessionInfo(req);
                next();
                console.log("=================parse nest=======================================")
            });

            // this.addSessionInfo(req);
            console.log("================== next 1 ===================")
            // next();
        } else {
            // this.addSessionInfo(req);
            console.log("================== next 2 ===================")
            next();
        }
    });
}

private parsePost(req: express.Request, callback: any) {
    var data = "";
    req.on("data", chunk => {
        data += chunk;
    });
    req.on("end", () => {
        if (data != "") {
            data = JSON.parse(data);
        }
        callback(data);
    });
}
}
