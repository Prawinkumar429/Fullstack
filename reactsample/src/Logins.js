import React from 'react'
import axios from 'axios';
import { useEffect, useState, } from 'react';
import Cookies from 'js-cookie';


const baseUrl = 'http://127.0.0.1:8000/api/token/';

const Logins = () => {
  useEffect(() => {
    document.title = 'User Login'
  });
  const [userData, setUserData] = useState({
    'email': '',
    'password': '',
  });
  const [error, setError] = useState('');
  // Add state for the refresh token and access token
  const [refreshToken, setRefreshToken] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  }

  const submitForm = () => {
    // Make a request to the authentication server with the email and password
    axios.post(baseUrl, userData)
      .then((response) => {
        if (response.status === 200) {
          // If the email and password are correct, store the refresh token and access token in state
          setRefreshToken(response.data.refresh);
          setAccessToken(response.data.access);
          Cookies.set('accessToken', response.data.access, { expires: 1 });
          Cookies.set('refreshToken', response.data.refresh, { expires: 1 });
          openDashboard();
        } else {
          // If the email and password are not correct, show an error message
          setError('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const openDashboard = () => {
    // Store the refresh token and access token in local storage
    localStorage.setItem('userLoginstatus',true);
    window.location.href = '/dashboard';
  }

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <section className="col-md-4 offset-4">
            <div className="card">
              <h5 className="card-header bg-primary text-center text-white" >User Login </h5>
              <div className="card-body">
                {error &&
                  <div className="alert alert-danger">
                    {error}
                  </div>
                }
                <label className="col-form-label">Email:</label>
                <input type="email" value={userData.email} onChange={handleChange} name='email' className="form-control" />
                <label className="col-form-label">Password:</label>
                <input type="password" value={userData.password} onChange={handleChange} name='password' className="form-control"  />
              </div>
              <div className="col-md-12 text-center">
                <btn className="btn btn-primary" onClick={submitForm} type="submit">
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

export default Logins
