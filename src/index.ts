var express = require('express');
import { Router, Request, Response } from 'express';
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req:any, res:any) => {
    res.send("HELLO FROM get");
})

app.use('/', (req: Request,res: Response)=>{
    res.send("HELLO FROM use JS");
})

app.listen(7000);
