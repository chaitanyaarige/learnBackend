var express = require('express');
import { Router, Request, Response } from 'express';
var app = express();
var bodyParser = require('body-parser');

import router from './routes/index';
app.use(router);

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req:Request, res:Response) => {
    res.send("HELLO FROM get");
})

app.listen(7000,()=>{
    console.log(`
    **********************************************
    ***********    http://localhost:7000/  *******
    **********************************************
    `)
});
app.set('title', 'My Site')
app.get('title') // "My Site"
