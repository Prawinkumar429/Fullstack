import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import Cookies from 'js-cookie';

const baseUrl = 'http://127.0.0.1:8000/api/Userslist/';
const Userslist = () => {
  const [data, setData] = useState([]);
  const [selectedAssignedTo, setSelectedAssignedTo] = useState('');
  useEffect(()=>{
      document.title='Userslist'
      // Check the value of userLoginstatus in local storage
    const userLoginstatus = localStorage.getItem('userLoginstatus');
    if (userLoginstatus === 'false') {
      // If userLoginstatus is false, redirect to the login page
      window.location.href = '/logins';
    }
    })
  useEffect(()=> {
    // Retrieve the access token from cookies
    const accessToken = Cookies.get('accessToken');
    // check if access token is present
    if(accessToken){
      axios(baseUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }).then((response) => {
        setData(response.data);
      }).catch((error) => {
        console.log(error.response);
      });
    }else {
      console.log("No access token found in cookies")
    }
  }, [selectedAssignedTo]);
  const handleAssignedToChange = (event) => {
    setSelectedAssignedTo(event.target.value);
  }
  const uniqueAssignedTos = data.reduce((acc, item) => {
    acc[item.Assigned_to] = true;
    return acc;
  }, {});
  const assignedTos = Object.keys(uniqueAssignedTos);
  return (
    <div >
      <div className="row">
        <aside className="border border-right col-md-2">
          <Sidebar/>
        </aside>
        <section style={{ fontFamily: 'Verdana', fontSize: '12px' }} className="border border-primary container col-md-9 mt-4 m-4">
          <div style={{ fontFamily: 'Verdana', fontSize: '15px' }}  className="border bg-secondary text-center text-white mt-2" > Users </div>

          <select className="btn btn-outline border btn-sm mt-2" value={selectedAssignedTo} onChange={handleAssignedToChange}>
            <option label='--First_Name--' value="">All</option>
            {assignedTos.map((assignedTo) => (
              <option key={assignedTo} value={assignedTo}>{assignedTo}</option>
            ))} 
           
          </select>
          <a className="btn btn-outline-success btn-sm ms-2 active float-end mt-2" href='/curriesadd'>Add Users</a> <a className="btn btn-outline-success btn-sm active float-end mt-2" href='/currieslists' >Users List</a>
          <table className="table table-bordered mt-2">
            <thead>
              <tr>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>S.No</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>first_name</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>last_name</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>email</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Department</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Designation</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>last_login</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Emp_Id</th>
              </tr>
            </thead>
            <tbody>
              {
                data
                  .filter((item) => selectedAssignedTo === '' || item.Assigned_to === selectedAssignedTo)
                  .map((item) => (
                    <tr key={item.id}>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.id}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.first_name}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.last_name}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.email}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Department}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Designation}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.last_login}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Emp_Id}</td>
                      <td><a className="btn btn-outline-danger btn-sm active"  role="button"  aria-pressed="true" href={`http://127.0.0.1:8000/api/Userslist/${item.id}`}>Delete</a> </td>
                      <td><a className="btn btn-outline-success btn-sm active"  role="button" aria-pressed="true" href={`http://127.0.0.1:8000/api/Userslist/${item.id}`}>Update</a> </td>
                        </tr> 
                    ))
}
  </tbody>
          </table>
          
        </section>
       <div> <Footer/></div>
       
        </div>
    </div>
  )
}
export default Userslist