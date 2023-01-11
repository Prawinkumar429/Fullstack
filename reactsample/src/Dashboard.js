import React from 'react'
import { useEffect } from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Dashboard = () => {
  useEffect(()=>{
    document.title='Dashboard'
    // Check the value of userLoginstatus in local storage
    const userLoginstatus = localStorage.getItem('userLoginstatus');
    if (userLoginstatus === 'false') {
      // If userLoginstatus is false, redirect to the login page
      window.location.href = '/logins';
    }
  })
  return (
      <div className="row">
        <aside className="col-md-2">
       <Sidebar/>
        </aside>
        <section className="col-md-9 mt-2">
          <Footer/>
        </section>
      </div>
  )
}
export default Dashboard