// var giveMeAJoke = require('give-me-a-joke');

// giveMeAJoke.getRandomDadJoke (function(joke) {
//     console.log(joke);
// })

const express = require('express')
const app = express()

app.use('/home',(req,res)=>{
    res.send("This is a response")
})




app.listen(8080,()=>{
    console.log("Server started at 8080");
})