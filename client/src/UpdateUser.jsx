import React, {useState, useEffect} from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";

function UpdateUser(){
  const {id} = useParams()
  const [ID, setID]= useState()
  const [Name, setName]= useState()
  const [Price, setPrice]= useState()
  const [Description, setDescription]= useState()
  const navigate = useNavigate()

  useEffect(() =>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setID(result.data.ID)
      setName(result.data.Name)
      setPrice(result.data.Price)
      setDescription(result.data.Description)
    })
    .catch(err =>console.log(err))
  },[])
  const Update = (e) =>{
    e.preventDefault();
    axios.put('http://localhost:3001/UpdateUser/'+id, {ID, Name, Price, Description})
    .then(result => {
      console.log(result)
      navigate('/')
  })
  .catch(err=> console.log(err))
  }

  return(
    <div className="main">
    <div className="submain">
  <form onSubmit={Update}>
    <h2>Update User</h2>
    <div className="md2">
      <label>ID</label>
      <input type="number" placeholder="Enter Your Id" name="ID" className="form-control" value={ID}  onChange={(e)=> setID(e.target.value)}/>
    </div>
    <div className="md2">
      <label>Name</label>
      <input type="text" placeholder="Enter Your Name" className="form-control" name="Name" value={Name} onChange={(e)=> setName(e.target.value)}/>
    </div>
    <div className="md2">
      <label>Price</label>
      <input type="text" placeholder="Enter Your Price" className="form-control" name="Price"  value={Price} onChange={(e)=> setPrice(e.target.value)}/>
    </div>
    <div className="md2">
      <label>Descripiton</label>
      <input type="text" placeholder="Enter Your message" className="form-control"    value={Description} name="Description" onChange={(e)=> setDescription(e.target.value)}/>
    </div>
    <button className="btn btn-success">Update</button>
  </form>



    </div>
    </div>
  )
}
export default UpdateUser;