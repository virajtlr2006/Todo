const express = require("express")
const mongoose= require("mongoose")
const app = express()
// start server
app.listen(5230,()=>{
    console.log("App started and listening on port 8080.")
})
app.get("/yash",async (req,res) => {
    res.send("Response sended to home");
})
