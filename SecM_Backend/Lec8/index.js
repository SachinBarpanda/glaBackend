const express = require('express')
const app = express()

app.use('/middleware',(req,res)=>{
    res.send("<h1>Backend started</h1>")
})

app.get('/getPth/:user',function(req,res){
    res.send(req.params)
})

app.get('/getPth/',function(req,res){
    res.send(req.query)
})

app.listen(8085,()=>{
    console.log("Port connected ");
})