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
  entities: [__dirname + "/../entities/**/*{.ts,.js}"],
};
const port = 5000;

let start = async () => {
  try {
    let connection = await createConnection(dbOptions);
    if(connection.isConnected){
      console.log(`Database Postgres is connected`)
      let expressApp = express();
      expressApp.listen(port, async (err: any) => {
        return console.log(
          `
                    ***********************************************
                            server is listening on ${port}
                    ***********************************************
                `
        )
      })
    }
  } catch (error) {
    console.log(error);
  }
};
start();
