import { createConnection } from "typeorm";
import AppExpress from "./apex/AppExpress"
import "reflect-metadata";

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
      let expressObj = new AppExpress().express;

      let port = 5200;
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
