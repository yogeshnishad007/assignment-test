const express = require("express");
// const router = express.Router()
const userModel = require("./user")
const postModel = require("./post")

const app = express()
const PORT = 4040

app.use(express.json())



app.get("/", async (req, res) => {

    // const createUser = await userModel.create({
    //     username: "Yogi01",
    //     password: "yogi01",
    //     posts: [],
    //     email: "yogi01@gmail.com",
    //     fullName: "Yogesh01"
    // })
    // res.send(createUser)
})


app.get("/createpost", async (req, res) => {

    const createPost = await postModel.create({
        postText:"HEllo POst" 
          
    })
    res.send(createPost)
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