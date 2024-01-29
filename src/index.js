const express = require("express");
const mongoose = require("mongoose");
const cors  = require("cors");

require("dotenv").config();

 const app = express();

 mongoose.connect(
    process.env.MONGO_URI,{
    }, console.log("connect to database")
 );
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Ola Mundo")
})

app.listen(7777, ()=> console.log("Api is running"));