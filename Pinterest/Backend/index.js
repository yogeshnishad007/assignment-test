const express = require("express");
// const router = express.Router()
const userModel = require("./user")
const postModel = require("./post")

const app = express()
const PORT = 4040

app.use(express.json())



app.get("/", async (req, res) => {

    const createUser = await userModel.create({
        username: "YogiBab",
        password: "yogi1",
        posts: [],
        email: "yogibaba@gmail.com",
        fullName: "Yogesh"
    })



    res.send(createUser)
})



app.listen(PORT, () => {

    //  try{
    //     await connection()
    //     console.log("DATABASE Connected")

    //  }catch(err){
    //        console.log("Error some w",err)

    //  }


    console.log(`Server Run http://localhost:${PORT}`)

})