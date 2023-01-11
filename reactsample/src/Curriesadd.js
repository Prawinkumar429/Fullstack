import axios from 'axios';
import React from 'react'
import Sidebar from './Sidebar'
import Cookies from 'js-cookie';
import Footer from './Footer';
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
const baseUrl = 'http://127.0.0.1:8000/api/Currieslist/';
const Curriesadd = () => {
  useEffect(()=>{
    document.title='Curriesadd'
    // Check the value of userLoginstatus in local storage
    const userLoginstatus = localStorage.getItem('userLoginstatus');
    if (userLoginstatus === 'false') {
      // If userLoginstatus is false, redirect to the login page
      window.location.href = '/logins';
    }
  })
  const [userData, setuserData] = useState({
    'Order_No': '',
    'Hdr': '',
    'C': '',
    'Prog': '',
    'Est_Ship': '',
    'Cust_Reqd_Ship': '',
    'PO_Recd': '',
    'Lines': '',
    'Assigned_to': '',
    'Holds': '',
    'Time_Started': '',
    'Value': '',
    'Work_assigned_date': '',
    'Review_date': '',
    'Release_date': '',
    'Hold': '',
    'status' : ''
  });
  const handleChange=(event)=>{
    setuserData({
      ...userData,
      [event.target.name]:event.target.value
    });
  }
  const submitForm=async ()=>{
    const userFormData = new FormData();
    userFormData.append("Order_No", userData.Order_No)
    userFormData.append("Hdr", userData.Hdr)
    userFormData.append("C", userData.C)
    userFormData.append("Prog", userData.Prog)
    userFormData.append("Est_Ship", userData.Est_Ship)
    userFormData.append("Cust_Reqd_Ship", userData.Cust_Reqd_Ship)
    userFormData.append("PO_Recd", userData.PO_Recd)
    userFormData.append("Lines", userData.Lines)
    userFormData.append("Assigned_to", userData.Assigned_to)
    userFormData.append("Holds", userData.Holds)
    userFormData.append("Time_Started", userData.Time_Started)
    userFormData.append("Value", userData.Value)
    userFormData.append("Work_assigned_date", userData.Work_assigned_date)
    userFormData.append("Review_date", userData.Review_date)
    userFormData.append("Release_date", userData.Release_date)
    userFormData.append("Hold", userData.Hold)
    try{
        const accessToken = Cookies.get('accessToken');
        if (!accessToken) {
            console.log("No access token found in cookies, redirecting to login page...");
            return;
        }
        const response = await axios.post(baseUrl, userFormData, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'multipart/form-data',
            },
          });
            if (response.status === 201) {
            setuserData({
              'Order_No': '',
              'Hdr': '',
              'C': '',
              'Prog': '',
              'Est_Ship': '',
              'Cust_Reqd_Ship': '',
              'PO_Recd': '',
              'Lines': '',
              'Assigned_to': '',
              'Holds': '',
              'Time_Started': '',
              'Value': '',
              'Work_assigned_date': '',
              'Review_date': '',
              'Release_date': '',
              'Hold': '',
              'status' : 'success'
            });
        }
    }catch(error){
        console.log(error);
        setuserData({'status':'error'})
    }
  };
  return (
    <div>
      <div className="row">
        <aside className="border border-right col-md-2">
        <Sidebar/>
        </aside>
        <section style={{ fontFamily: 'Verdana', fontSize: '12px' }} className="border border-primary container col-md-9 mt-4 m-4">
        {userData.status && <b className="mt-2 text-sucess text-center">Currie {userData.Order_No} Added Successfully</b>}
        <a className="btn btn-outline-success btn-sm ms-2 active float-end mt-2" href='/curriesadd'>Add Curries</a>  <a className="btn btn-outline-success btn-sm active float-end mt-2" href='/currieslists' >Curries List</a>
      <div className="border card ms-2 mt-5 m-3">
      <div style={{ fontFamily: 'Verdana', fontSize: '15px' }}  className="border bg-secondary text-center text-white mt-2" >Add Curries </div>
        <div className="card-body">
         <form>
    <div className="controls mt-3">
        <div className="row">
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Order_No">Order_No:</label>
                    <input id="Order_No" type="text" name="Order_No" className="form-control" value={userData.Order_No} onChange={handleChange} placeholder="Please enter Order_No" required="required" data-error="Order_No required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Hdr">Hdr:</label>
                    <input id="Hdr" type="text" name="Hdr" className="form-control" value={userData.Hdr} onChange={handleChange} placeholder="Please enter your Hdr" required="required" data-error="Valid Hdr is required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="C">C:</label>
                    <input id="C" type="text" name="C" className="form-control" value={userData.C} onChange={handleChange} placeholder="Please enter C"/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Prog">Prog:</label>
                    <input id="Prog" type="text" name="Prog" className="form-control" value={userData.Prog} onChange={handleChange} placeholder="Please enter your prog"/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
        </div>
        </div>
        <div className="controls">
        <div className="row mt-3">
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Est_Ship">Est_Ship:</label>
                    <input id="Est_Ship" type="date" name="Est_Ship" className="form-control" value={userData.Est_Ship} onChange={handleChange} placeholder="Please enter Est_Ship" required="required" data-error="Est_Ship required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Cust_Reqd_Ship">Cust_Reqd_Ship:</label>
                    <input id="Cust_Reqd_Ship" type="date" name="Cust_Reqd_Ship" className="form-control" value={userData.Cust_Reqd_Ship} onChange={handleChange} placeholder="Please enter your Cust_Reqd_Ship" required="required" data-error="Valid Cust_Reqd_Ship is required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="PO_Recd">PO_Recd:</label>
                    <input id="PO_Recd" type="date" name="PO_Recd" className="form-control" value={userData.PO_Recd} onChange={handleChange} placeholder="Please enter PO_Recd"/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Lines">Lines:</label>
                    <input id="Lines" type="number" name="Lines" className="form-control" value={userData.Lines} onChange={handleChange} placeholder="Please enter your Lines"/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
        </div>
        </div>
        <div className="controls">
        <div className="row mt-3">
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Assigned_to">Assigned_to:</label>
                    <input id="Assigned_to" type="text" name="Assigned_to" className="form-control" value={userData.Assigned_to} onChange={handleChange} placeholder="Please enter Assigned_to" required="required" data-error="Assigned_to required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Holds">Holds:</label>
                    <input id="Holds" type="text" name="Holds" className="form-control" value={userData.Holds} onChange={handleChange} placeholder="Please enter Yes/No" required="required" data-error="Valid Holds is required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Time_Started">Time_Started:</label>
                    <input id="Time_Started" type="datetime-local" name="Time_Started" className="form-control" value={userData.Time_Started} onChange={handleChange} placeholder="Please enter Time_Started"/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Value">Value:</label>
                    <input id="Value" type="number" name="Value" className="form-control" value={userData.Value} onChange={handleChange} placeholder="Please enter your Value"/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
        </div>
        </div>
        <div className="controls">
        <div className="row mt-3">
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Work_assigned_date">Work_assigned_date:</label>
                    <input id="Work_assigned_date" type="datetime-local" name="Work_assigned_date" className="form-control" value={userData.Work_assigned_date} onChange={handleChange} placeholder="Please enter Work_assigned_date" required="required" data-error="Work_assigned_date required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Review_date">Review_date:</label>
                    <input id="Review_date" type="datetime-local" name="Review_date" className="form-control" value={userData.Review_date} onChange={handleChange} placeholder="Please enter your Review_date" required="required" data-error="Valid Review_date is required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group">
                    <label for="Release_date">Release_date:</label>
                    <input id="Release_date" type="datetime-local" name="Release_date" className="form-control" value={userData.Release_date} onChange={handleChange} placeholder="Please enter Release_date"/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-sm-3">
                <label className="form-check-label" for="flexCheckChecked">Hold:</label>
                <div className="form-check">
                    <input id="flexCheckChecked" type="checkbox" name="Hold" className="form-check-input" value={userData.Hold} onChange={handleChange} />
                </div>
            </div>
        </div>
        </div>
        </form>
        <Button className="mt-3" onClick={submitForm} variant="primary" type="submit">
        Add Curries
      </Button>
    </div>
    </div>
</section>
<div> <Footer/></div>
    </div>
      </div>
  )
}
export default Curriesadd