const express = require('express')
const app = express()

app.get('/login/:user',(req,res)=>{
    console.log(req.params);
    res.send(req.params);
})

app.get('/login/',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})
// app.get('/',(req,res)=>{
//     console.log("Path get");
//     res.send(req.params);
// })

app.listen(8080,()=>{
    console.log("server opened in port 8080");
})