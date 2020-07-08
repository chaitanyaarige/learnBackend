import { createConnection } from "typeorm";
import "reflect-metadata";
import express from "express";

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
  entities: ["src/entities/**/*{.ts,.js}"],
};
const port = 5000;

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


      let port = 5000;
      expressObj.listen(port, () => {
        console.log(` ***********************************************
           server is listening on ${port}  http://localhost:${port}/
          ***********************************************`);
      });
    }
  } catch (error) {
    console.log(error);
  }
};
start();
