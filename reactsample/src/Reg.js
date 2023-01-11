import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
const baseUrl = 'http://127.0.0.1:8000/api/user/';
const Reg = () => {
  useEffect(()=>{
    document.title='User Register'
  })
  const [userData, setuserData] = useState({
    'first_name': '',
    'last_name': '',
    'user_name': '',
    'email': '',
    'password': '',
    'confirm_password': '',
    'status' : ''
  });
  const handleChange=(event)=>{
    setuserData({
      ...userData,
      [event.target.name]:event.target.value
    });
  }
  const submitForm=()=>{
    const userFormData = new FormData();
    userFormData.append("first_name", userData.first_name)
    userFormData.append("last_name", userData.last_name)
    userFormData.append("user_name", userData.user_name)
    userFormData.append("email", userData.email)
    userFormData.append("password", userData.password)
    userFormData.append("confirm_password", userData.confirm_password)

    try{
        axios.post(baseUrl,userFormData).then((response)=>{
            setuserData({
              'first_name': '',
              'last_name': '',
              'user_name': '',
              'email': '',
              'password': '',
              'confirm_password': '',
              'status' : 'success'
            });
         });
    }catch(error){
        console.log(error);
        setuserData({'status':'error'})
    }
  };
  
  return (
    <div>
      <center>
      
      <Form className='container abc'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control value={userData.first_name} onChange={handleChange} name='first_name' type="text" placeholder="Enter FirstName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control value={userData.last_name} onChange={handleChange} name='last_name' type="text" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control value={userData.user_name} onChange={handleChange} name='user_name' type="text" placeholder="Enter User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control value={userData.email} onChange={handleChange} name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={userData.password} onChange={handleChange} name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control value={userData.confirm_password} onChange={handleChange} name='confirm_password' type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={submitForm} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        <br>
        </br>
        <Link to='/login' className='Link'>Login</Link>
      </center>
    </div>
    

  )
}

export default Reg