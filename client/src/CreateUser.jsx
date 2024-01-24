import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function CreateUser(){
  const [ID, setID]= useState()
  const [Name, setName]= useState()
  const [Price, setPrice]= useState()
  const [Description, setDescription]= useState()
  const navigate = useNavigate()
const Submit = (e) =>{
  e.preventDefault();
  axios.post("http://localhost:3001/CreateUser", {ID, Name, Price, Description})
  .then(result => {
    console.log(result)
    navigate('/')
  })

  .catch(err => console.log(err))

}

  return(
    <div className="main">
    <div className="submain">
  <form onSubmit={Submit}>
    <h2>Add User</h2>
    <div className="md2">
      <label>ID</label>
      <input type="number" placeholder="Enter Your Id" className="form-control" name="ID" onChange={(e)=> setID(e.target.value)}/>
    </div>
    <div className="md2">
      <label>Name</label>
      <input type="text" placeholder="Enter Your Name" className="form-control" name="Name" onChange={(e)=> setName(e.target.value)}/>
    </div>
    <div className="md2">
      <label>Price</label>
      <input type="text" placeholder="Enter Your Price" className="form-control" name="Price" onChange={(e)=> setPrice(e.target.value)}/>
    </div>
    <div className="md2">
      <label>Descripiton</label>
      <input type="text" placeholder="Enter Your message" name="Description" className="form-control" onChange={(e)=> setDescription(e.target.value)}/>
    </div>
    <button className="btn btn-success">Submit</button>
  </form>



    </div>
    </div>
  )
}
export default CreateUser;