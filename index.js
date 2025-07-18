const express = require("express")
const mongoose= require("mongoose")
const app = express()
// start server
app.listen(5230,()=>{
    console.log("App started and listening on port 8080.")
})
app.get("/",async (req,res) => {
    res.send("Response sended to home");
})

// all todo route

app.get("/todo",async (req,res) => {
    res.send("All todos");
})

// new todo
app.post("/todo/new",async (req,res) => {
    res.send("New todo");
})

//  single todo with  id

//Delete todo
app.get("/todo/delete",async (req,res) => {
    res.send("Delete todo");
})

app.get("/todo/:id",async (req,res) => {
    res.send("Single todo");
})

