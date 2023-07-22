const express=require('express');
const { getAllTrains, getTrainByNumber } = require('../controller/tickets');

const route=express.Router();

route.get('/',(req,res)=>{
    res.send("Test");
});

route.get('/trains/:type',getAllTrains);
route.get('/searchtrain/:number',getTrainByNumber);

module.exports=route;