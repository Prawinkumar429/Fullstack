import React from 'react'
const Sidebar = () => {
  return (
    <div className="row "  style={{ fontFamily: 'Verdana', fontSize: '13px' }}>
    <div className="border" style={{width: "18rem"}}>
  <div className="card-header">
  <a className="text-success" href="/dashboard">Dashboard</a>
  </div>
  <ul className="text-danger  list-group list-group-flush">
    <li className="list-group-item"><a className="text-success" href="/userslist">Users</a></li>
    <li className="list-group-item"><a className="text-success" href="/currieslists">Admin Curries</a></li>
    <li className="list-group-item"><a className="text-success" href="/currieslists">User Curries</a></li>
    <li className="list-group-item"><a className="text-danger" href="/logout">Logout</a></li>
  </ul>
</div>
</div>
  )
}

export default Sidebar