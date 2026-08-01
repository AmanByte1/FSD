const express=require("express");
const mongose=require("mongoose");
const path=require("./model");


const app=express();


app.use(express.urlencoded({extended:true}));


mongose.connect("mongodb://127.0.0.1:27017/texst")


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"));

});
