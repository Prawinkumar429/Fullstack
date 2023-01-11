import React from 'react'
import axios from 'axios';
import { useEffect, useState, } from 'react';
const baseUrl = 'http://127.0.0.1:8000/api/token/';
const Login = () => {
  useEffect(()=>{
    document.title='User Login'
  });
  const [userData, setuserData] = useState({
    'email': '',
    'password': '',
  });
  const handleChange=(event)=>{
    setuserData({
      ...userData,
      [event.target.name]:event.target.value
    });
  }
  const submitForm=()=>{
    const userFormData = new FormData();
    userFormData.append("email", userData.email)
    userFormData.append("password", userData.password)

    try{
        axios.post(baseUrl,userFormData).then((response)=>{
              if (response.data.bool===true){
                localStorage.setItem('userLoginstatus',true);
                window.location.href='/dashboard';
              }
            });
    }catch(error){
        console.log(error);
    }
  };
  const userLoginstatus=localStorage.getItem('userLoginStatus')
  if (userLoginstatus==='true'){
    window.location.href='/dashboard';
    return false
  }
  return (
    <div>
      <div className="container mt-4">
      <div className="row">
      <section className="col-md-4 offset-4">
      <div className="card">
      <h5 className="card-header bg-primary text-center text-white" >User Login </h5>
      <div className="card-body">
      <label className="col-form-label">Email:</label>
      <input type="email" value={userData.email} onChange={handleChange} name='email' className="form-control" />
      <label className="col-form-label">Password:</label>
      <input type="password" value={userData.password} onChange={handleChange} name='password' className="form-control" />
      </div>
      <div className="col-md-12 text-center">
      <btn className="btn btn-primary" onClick={submitForm}  type="submit">
        Submit
      </btn>
      </div>
      </div>
      </section>
      </div>
      </div>
    </div>
  )
}
export default Login