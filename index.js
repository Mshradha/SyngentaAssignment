const express = require("express");

const connection = require("./config/db.js");

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.status(200).send("HELLO")
})

app.listen("8080", async()=>{
    try {
        await connection;
        console.log("Connection")
    } catch (error) {
        console.log("error")
    }
})