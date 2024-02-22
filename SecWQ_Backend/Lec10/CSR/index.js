const express = require('express')
const app = express()
const path = require('path')

let datas = ['running','coding','playing','eating','sleeping']
app.use(express.static(path.join(__dirname,'public')))


app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.get('/todo',function(req,res){
    res.json(datas);
})

app.post('/todo',function(req,res){
    console.log(req.body.val);
    datas.push(req.body.val)
})

app.listen(8080,()=>{
    console.log("Running...");
})