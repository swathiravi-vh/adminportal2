import React from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const params = useParams()
  return (
    <div className="container">
      <div className="row">
        <h1>Id :{params.id}</h1>
        <div className="col-lg-6">Usernmae:person1</div>
        <div className="col-lg-6">Email:person1</div>
        <div className="col-lg-6">Country:person1</div>
        <div className="col-lg-6">State:person1</div>
        <div className="col-lg-6">City:person1</div>
        <div className="col-lg-6">phone:person1</div>
        <div className="col-lg-6">DOB:person1</div>
        <div className="col-lg-6">Gender:person1</div>
      </div>
    </div>
  );
}

export default ViewUser;
