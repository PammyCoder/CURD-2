import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div className="submain">
        <Link to="/create" className="btn btn-sucess">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user,i) => {
              return (
                <tr key={i}>
                  <td>{user.ID}</td>
                  <td>{user.Name}</td>
                  <td>{user.Price}</td>
                  <td>{user.Descripiton}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className="btn btn-success">
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default User;
