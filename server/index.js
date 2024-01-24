const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const UserModel = require('./models/User')

const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")
app.get('/', (req, res) =>{
  UserModel.find({})
  .then(users =>res.json(users))
  .catch(err => res.json(err))
})

app.get('/getUser/:id',(req, res)=>{
  const id=req.params.id;
  UserModel.findById({_id:id})
  .then(users =>res.json(users))
  .catch(err => res.json(err))

})
app.put('/UpdateUser/:id',(req, res)=>{
  const id=req.params.id;
  UserModel.findByIdAndUpdate({_id:id}, {
    ID: req.body.ID, Name: req.body.Name, Price: req.body.Price, Description: req.body.Description})
  .then(users =>res.json(users))
  .catch(err => res.json(err))

})

app.delete('/deleteUser/:id',(req, res) =>{
  const id=req.params.id;
  UserModel.findByIdAndDelete({_id: id})
  .then(res =>res.json(res))
  .catch(err => res.json(err))

})

app.post("/CreateUser", (req, res) =>{
  UserModel.create(req.body)
  .then(User =>res.json(users))
  .catch(err => res.json(err))
})




app.listen(3001, () =>{

  console.log("server is running and Listing.....");
})