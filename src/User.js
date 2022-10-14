import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
    const [users,setUsers] = useState([
        
    ]);
    useEffect(() =>{
        setUsers([
            {
             id:"1",
             username:"Person1",
             email:"person1@gmail.com",
             country:"India",
             state:"Tamilnadu",
             city:"Chennai",
             phone:"6238006085",
             dob:"23-05-1998",
             gender:"male"
            },

            {
                id:"2",
                username:"Person2",
                email:"person2@gmail.com",
                country:"India",
                state:"Tamilnadu",
                city:"Madurai",
                phone:"6238006084",
                dob:"23-05-1997",
                gender:"male"
               }
    ])
    },[])
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/user_create"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user) =>{
                    return <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td>{user.state}</td>
                    <td>{user.city}</td>
                    <td>{user.phone}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td>
                    <td>
                      <Link to={`/user/${user.id}`} className="btn btn-warning">View</Link>
                      <Link to={`/user/${user.id}`} className="btn btn-primary">Edit</Link>
                      <Link to={`/user/${user.id}`} className="btn btn-danger">Delete</Link>
                    </td>
                    
                  </tr>
                })

                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
