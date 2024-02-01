const express = require('express')
const app = express()
const path = require('path')

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

// app.get('/',(req,res)=>{
//     res.send("<h1>Hi this is get </h1>")
// })

// app.get('/home/:name',(req,res)=>{
//     console.log(req.params);
// })

app.get('/',(req,res)=>{
    let pi = Math.PI;
    let name = "Sachin"
    res.render('index',{pi,name})
})

app.get('/home/',(req,res)=>{
    res.send(req.query);
    console.log(req.query);
})


// app.get('*',(req,res)=>{
//     res.send("<h1>Hi this is bad request </h1>")
// })

app.listen(8080,()=>{
    console.log("Server started at 8080");
})
