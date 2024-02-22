const express = require('express')
const app = express()
const path = require('path')


// app.set('view engine', 'ejs')
// app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

let todos = ['playing','eating','coding','sleeping'];

app.use('/',express.static(path.join(__dirname,'public')))


app.get('/todo',function(req,res){
    res.json(todos);
})

app.post('/todo',(req,res)=>{
    // console.log(req.body);
    todos.push(req.body.value);
})
app.listen(8080,()=>{
    console.log("Running...");
})