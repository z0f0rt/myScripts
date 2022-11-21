import express from "express";

const POST = 5000;
const app = express();




app.listen(POST, ()=>{console.log('Сервер удачно запустился на порте:' + POST)})