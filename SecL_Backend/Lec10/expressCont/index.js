const express = require('express')
const app = express()

app.use('/home',(req,res)=>{
    res.send('<h1>Middleware chalega </h1>');
})

app.get('/get',(req,res)=>{
    res.send("<b>Get Me if you can</b>")
})

app.get('/product/:cocunutoil',(req,res)=>{
    console.log(req.params); 
    res.send(`<h1>${req.params.cocunutoil}</h1>`) 
})
app.get('/product/',(req,res)=>{
    console.log(req.query); 
    res.send(req.query) 
})

// app.get('*',(req,res)=>{
//     res.send("<h1>Bad Request </h1>")
// })

app.listen(8080,()=>{
    console.log("Server opened at 8080");
})
