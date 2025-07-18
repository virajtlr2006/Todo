// All required packages

const express = require("express")
const mongoose= require("mongoose")
const app = express()

// Parse json 
app.use(express.json())

// Mongodb connnection function
const mongoconnect = async () => {
    await mongoose.connect("mongodb+srv://virajtlr2006:virajtlr2006@viraj.g7haxve.mongodb.net/?retryWrites=true&w=majority&appName=viraj")
    console.log("MongoDb connected")
}

// start server
app.listen(8080,()=>{
    mongoconnect() //Connected mongo db
    console.log("App started and listening on port 8080.")//App listening
})

// Making schema 
const todoSchema = new mongoose.Schema({
    name:String,
    description:String,
})

//Make model
const Todo = mongoose.model("todo",todoSchema)

//Root route
app.get("/",async (req,res) => {
    res.send("Welcome to my TODO app");
})

// all todo route
app.get("/todo",async (req,res) => { 
    const allTodo =  await Todo.find()//Retrive all todos from DB
    res.json({
    "todo":allTodo 
    }); //Response sended
})


// new todo
app.post("/todo/new",async (req,res) => {
    const {name,description} = req.body //Extract all data from body
    const saveToTodo = new Todo({
        "name":name,
        "description":description
    }) //Make todo objects
    await saveToTodo.save() //Saved to DB
    res.json({
        "name":name,
        "description":description
    }); //Response sended
})



//Delete todo
app.get("/todo/delete/:id",async (req,res) => {
    const{id} = req.params //Extract from params(id)
    const deletedTodo = await Todo.findByIdAndDelete(id)//Deleted todo by id
    res.json({
        "message":"Deleted todo successfully"
    });//Response send
})

//  single todo with  id
app.get("/todo/:id",async (req,res) => {
    const {id} = req.params //Extract from params(id)
    const singleTodo = await Todo.findById(id) //Find single todo by id
    res.json({
        "todo":singleTodo
    }); //Response sended
})


