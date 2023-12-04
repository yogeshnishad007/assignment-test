const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb://127.0.0.1:27017/testapi")

const userSchema = mongoose.SchemaType({

})



const UserModal = mongoose.Model("User",userSchema)

modules.export={
    connection,
     UserModal
}