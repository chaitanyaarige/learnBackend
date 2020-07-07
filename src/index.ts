import { createConnection } from "typeorm";

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

let start = async () => {
  try {
    let connection = await createConnection(dbOptions);
    console.log(connection.isConnected);
    if(connection.isConnected){
        
    }
  } catch (error) {
    console.log(error);
  }
};
start();
