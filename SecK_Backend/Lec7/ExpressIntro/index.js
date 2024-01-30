const express = require('express')
const app = express()

app.use('/login',(req,res)=>{
    res.send("Mera Jhoota hai Japani")
})

//./register path -> print Heading 'Register Form'

app.get('/',(req,res)=>{
    res.send("<h1>Getting the get</h1>")
})
app.get('/cat/dog',(req,res)=>{
    res.send("<h1>Getting the cat/dog</h1>")
})
app.get('*',(req,res)=>{
    res.send("<h1>Error in path</h1>")
})

app.listen(8080,()=>{
    console.log("server opened in port 8080");
})