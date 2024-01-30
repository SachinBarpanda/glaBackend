// var giveMeAJoke = require('give-me-a-joke');

// // To get a random dad joke
// giveMeAJoke.getRandomDadJoke (function(joke) {
//      console.log(joke);
// })

const express = require('express')
const app = express()

app.use("/middle",(req,res)=>{
    res.send("Middleware started")
})

app.listen(8080,()=>{
    console.log("Server started at 8080");
})
