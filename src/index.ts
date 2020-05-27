var express = require('express');
import { Router, Request, Response } from 'express';
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/add-user', (req:any, res:any) => {
//     res.send('<form action="/users" method="POST"><input type="text" name="title"><button>Add me</button></form>')
// })

// app.get('/users', (req:Request,res:Response)=> {
//     console.log("Quer -->  ",req.query)
//     res.statusCode = 200;
//     res.send(req.query);
// })

app.use('/', (req: Request,res: Response)=>{
    console.log('kk')
    // res.send("HELLO FROM NODE JS");
})

app.get('/', (req:any, res:any) => {
    // res.send('<form action="/users" method="POST"><input type="text" name="title"><button>Add me</button></form>')
})

// app.use((req: Request,res: Response, next:any)=>{
//   res.setHeader('Cache-Control', 'public, max-age=9876545678')
//   next();
// })

app.listen(7000);