import axios from 'axios';
import React from 'react'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const baseUrl = 'http://127.0.0.1:8000/api/draftlist/';
const Draftingadd = () => {
    useEffect(()=>{
      document.title='Add Drafting'
    })
    const [userData, setuserData] = useState({
      'name': '',
      'company': '',
      'draft_status': '',
      'requests': '',
      'drawings': '',
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
      userFormData.append("name", userData.name)
      userFormData.append("company", userData.company)
      userFormData.append("draft_status", userData.draft_status)
      userFormData.append("requests", userData.requests)
      userFormData.append("drawings", userData.drawings)
  
      try{
          axios.post(baseUrl,userFormData).then((response)=>{
              setuserData({
                'name': '',
                'company': '',
                'draft_status': '',
                'requests': '',
                'drawings': '',
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
    <div className="container mt-4">
    <div className="row">
      <aside className="col-md-2">
      <Sidebar/>
      </aside>
      <section className="col-md-10">
      {userData.status && <b className="text-sucess">Drafting Added Successfully</b>}
    <div className="card">
    <h5 className="card-header bg-primary text-white" >Drafting <a className="btn btn-outline-warning btn-sm ms-2 active float-end" href='/draftadd' >Add Drafting</a> <a className="btn btn-outline-warning btn-sm active float-end" href='/draftlist' >Drafting List</a></h5>
      <div className="card-body">
      <Form className='container abc'>
    <Form className="mb-3" >
      <Form.Label>Name:</Form.Label>
      <Form.Control value={userData.name} onChange={handleChange} name='name' type="text" placeholder=" " />
    </Form>
    <Form className="mb-3" >
      <Form.Label>Company:</Form.Label>
      <Form.Control value={userData.company} onChange={handleChange} name='company' type="text" placeholder=" " />
    </Form>
    <Form className="mb-3" >
      <Form.Label>Status:</Form.Label>
      <Form.Control value={userData.draft_status} onChange={handleChange} name='draft_status' type="text" placeholder=" " />
    </Form>
    <Form className="mb-3" >
      <Form.Label>Requests:</Form.Label>
      <Form.Control value={userData.requests} onChange={handleChange} name='requests' type="number" placeholder=" " />
    </Form>
    <Form className="mb-3" >
      <Form.Label>Drawings:</Form.Label>
      <Form.Control value={userData.drawings} onChange={handleChange} name='drawings' type="number" placeholder=" " />
    </Form>
    <Button onClick={submitForm} variant="primary" type="submit">
      Add Drafting
    </Button>
  </Form>
  </div>
  </div>


      </section>
    
  </div>
    </div>
          </div>
  )
}

export default Draftingadd