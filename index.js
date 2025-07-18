const express = require("express")
const mongoose= require("mongoose")
const app = express()

// Mongodb connnection function

const mongoconnect = async () => {
    await mongoose.connect("mongodb+srv://virajtlr2006:virajtlr2006@viraj.g7haxve.mongodb.net/?retryWrites=true&w=majority&appName=viraj")
    console.log("MongoDb connected")
}

// start server
app.listen(5230,()=>{
    mongoconnect()
    console.log("App started and listening on port 8080.")
})

// Making schema 

const todoSchema = new mongoose.Schema({
    name:String,
    description:String,
})

const Todo = mongoose.model("todo",todoSchema)


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

