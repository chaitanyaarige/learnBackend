import { createConnection } from "typeorm";
import express from "express";
import "reflect-metadata";
import {Drugs} from "./entity/drugs";

let dbOptions: any = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "pharmacy",
  logging: false,
  synchronize: false,
  entities: ["src/entity/**/*{.ts,.js}"],
};

let start = async () => {
  try {
    let connection = await createConnection(dbOptions);
    if (connection.isConnected) {
      console.log("Connected To DataBase");
      let expressObj = express();


      const router = express.Router();
      router.get("/", (req, res) => {
          res.json({
              message: "Hello World! Website Applications"
          });
      });
      expressObj.use("/", router);


      let port = 5200;
      expressObj.listen(port, () => {
        console.log(` ***********************************************
           server is listening on ${port}  http://localhost:${port}/
          ***********************************************`);
      });

      // test orm
      let drug = new Drugs();
      drug.id = 1
      drug.drug_name = "Paracetemol"
      drug.serial_number = "dsdsd"
      drug.box_price = 22
      drug.supplier = 'mee'
      drug.discount = 0
      drug.inventory = 199
      await connection.manager.save(drug);
      const drugs = await connection.manager.find(Drugs);
      console.log(drugs, 'all')
    }
  } catch (error) {
    console.log(error);
  }
};
start();
