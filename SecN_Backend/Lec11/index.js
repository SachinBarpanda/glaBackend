const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

let todos = ['running','walking','coding','sleeping']

app.get('/todo',(req,res)=>{
    res.json(todos);
})

app.post('/todo',(req,res)=>{
    let value = req.body.value;
    todos.push(value);
})
app.listen(8080,()=>{
    console.log("Running...");
})


