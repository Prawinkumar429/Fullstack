import React from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
const baseUrl = 'http://127.0.0.1:8000/api/draftlist/';

const Draftinglist = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        document.title='Drafting-list'
      })
    useEffect(()=>{
        axios(baseUrl).then((response) => {
            setData(response.data);
        });
    },[])
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-2">
        <Sidebar/>
        </aside>
        <section className="col-md-10">
      <div className="card">
        <h5 className="card-header bg-primary text-white" >Drafting <a className="btn btn-outline-warning btn-sm ms-2 active float-end" href='/draftadd' >Add Drafting</a> <a className="btn btn-outline-warning btn-sm active float-end" href='/draftlist' >Drafting List</a></h5>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th >#</th>
                <th>Name</th>
                <th>Company</th>
                <th>Status</th>
                <th>Requests</th>
                <th>Drawings</th>
                <th>Date</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
  {
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.company}</td>
                            <td>{item.draft_status}</td>
                            <td>{item.requests}</td>
                            <td>{item.drawings}</td>
                            <td>{item.date}</td>
                            <td><button className="btn btn-outline-danger btn-sm active">Delete</button> </td>
                            <td><button className="btn btn-outline-success btn-sm active">Update</button> </td>
                        </tr> 
                    ))
}
    
  </tbody>
          </table>
        </div>
        </div>
        </section>
      
    </div>
      </div>
  )
}

export default Draftinglist