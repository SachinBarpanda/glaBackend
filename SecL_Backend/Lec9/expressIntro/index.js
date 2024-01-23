const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("We are at the root file")
})

app.listen(8080,function(){
    console.log("Server running at 8080");
})