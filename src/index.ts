var express = require('express');
import { Router, Request, Response } from 'express';
import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controllers/userControllers";

var bodyParser = require('body-parser');

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [UserController]
});
 

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req:any, res:any) => {
    res.send("HELLO FROM get");
})

app.use('/', (req: Request,res: Response)=>{
    res.send("HELLO FROM use JS");
})

app.listen(7000);
