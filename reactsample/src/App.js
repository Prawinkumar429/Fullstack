import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Draftingadd from './Draftingadd'
import Draftinglist from './Draftinglist'
import Curriesadd from './Curriesadd'
import Header from './Header'
import Logins from './Logins'
import Logout from './Logout'
import Currieslists from './Currieslists'
import Userslist from './Userslist'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = '/logins'element={<Logins/>}/>
        <Route path = '/logout'element={<Logout/>}/>
        <Route path = '/curriesadd'element={<Curriesadd/>}/>
        <Route path = '/dashboard'element={<Dashboard/>}/>
        <Route path = '/draftlist'element={<Draftinglist/>}/>
        <Route path = '/draftadd'element={<Draftingadd/>}/>
        <Route path = '/currieslists'element={<Currieslists/>}/>
        <Route path = '/userslist'element={<Userslist/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App