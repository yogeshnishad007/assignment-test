const express = require("express");


const app=express()
const PORT=4040

app.use(express.json())

app.get("/",(req,res)=>{

    res.send("Home Page")
})

app.listen(PORT,()=>{
   
         
    console.log(`Server Run http://localhost:${PORT}`)

})