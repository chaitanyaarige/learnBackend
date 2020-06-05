var express = require('express');
import "reflect-metadata"; // this shim is required
var bodyParser = require('body-parser');
const app = express();// get all todos
app.use(bodyParser.urlencoded({ extended: false }));
import router from './routes/index';

app.use(router);

app.listen(7000);
