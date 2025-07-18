const express = require("express")
const mongoose= require("mongoose")
const app = express()

app.use(express.json())
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
    const allTodo =  await Todo.find()
    res.json({
    "todo":allTodo
    });
})


// new todo
app.post("/todo/new",async (req,res) => {
    const {name,description} = req.body
    const saveToTodo = new Todo({
        "name":name,
        "description":description
    })
    await saveToTodo.save()
    res.json({
        "name":name,
        "description":description
    });
})



//Delete todo
app.get("/todo/delete/:id",async (req,res) => {
    const{id} = req.params
    const deletedTodo = await Todo.findByIdAndDelete(id)
    res.json({
        "message":"Deleted todo successfully"
    });
})

//  single todo with  id
app.get("/todo/:id",async (req,res) => {
    const {id} = req.params
    const singleTodo = await Todo.findById(id)
    res.json({
        "todo":singleTodo
    });

})


