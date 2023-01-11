import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import Cookies from 'js-cookie';

const baseUrl = 'http://127.0.0.1:8000/api/Currieslist/';
const Currieslist = () => {
  const [data, setData] = useState([]);
  const [selectedAssignedTo, setSelectedAssignedTo] = useState('');
  useEffect(()=>{
      document.title='Currieslist'
      // Check the value of userLoginstatus in local storage
    const userLoginstatus = localStorage.getItem('userLoginstatus');
    if (userLoginstatus === 'false') {
      // If userLoginstatus is false, redirect to the login page
      window.location.href = '/logins';
    }
    })
  useEffect(()=>{
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
          <div style={{ fontFamily: 'Verdana', fontSize: '15px' }}  className="border bg-secondary text-center text-white mt-2" > Curries </div>

          <select className="btn btn-outline border btn-sm mt-2" value={selectedAssignedTo} onChange={handleAssignedToChange}>
            <option label='--Assigned_To--' value="">All</option>
            {assignedTos.map((assignedTo) => (
              <option key={assignedTo} value={assignedTo}>{assignedTo}</option>
            ))} 
           
          </select>
          <a className="btn btn-outline-success btn-sm ms-2 active float-end mt-2" href='/curriesadd'>Add Curries</a> <a className="btn btn-outline-success btn-sm active float-end mt-2" href='/currieslists' >Curries List</a>
          <table className="table table-bordered mt-2">
            <thead>
              <tr>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>S.No</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Order_No</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Prog</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Holds</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Assigned_to</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>PO_Recd</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Work_assigned_date</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Time_Started</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Review_date</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Release_date</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Lines</th>
                <th style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Value($)</th>

              </tr>
            </thead>
            <tbody>
              {
                data
                  .filter((item) => selectedAssignedTo === '' || item.Assigned_to === selectedAssignedTo)
                  .map((item) => (
                    <tr key={item.id}>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.id}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Order_No}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Prog}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Holds}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Assigned_to}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.PO_Recd}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Work_assigned_date}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Time_Started}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Review_date}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Release_date}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Lines}</td>
                      <td style={{ fontFamily: 'Verdana', fontSize: '12px' }}>{item.Value}</td>
                      <td><button className="btn btn-outline-danger btn-sm active">Delete</button> </td>
                      <td><button className="btn btn-outline-success btn-sm active">Update</button> </td>
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

export default Currieslist