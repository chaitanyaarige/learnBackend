var express = require('express');
import { Router, Request, Response } from 'express';
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


console.log("HIII")
app.listen(7000);
