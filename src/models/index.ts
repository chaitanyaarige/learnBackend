'use strict';
require('dotenv').config()
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let db :any= {};

let typeOrm: any;
if (config.use_env_variable) {
  typeOrm = new typeOrm(process.env[config.use_env_variable], config);
} else {
  typeOrm = new typeOrm(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file: any) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: any) => {
    const model = typeOrm['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName: any) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Todo={
  create:function(){

  }
}

// module.exports = db;
export let models=db;
