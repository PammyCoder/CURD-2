const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({

  ID:Number,
  Name:String,
  Price:Number,
  Description:String
  
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel