const express=require('express');
const cors=require('cors');
const route=require('./routes/route.js');

const app=express();

const PORT=process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',route);

app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`);
})
