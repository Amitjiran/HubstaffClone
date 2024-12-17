

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './containers/Dashboard/MainDashboard/AMainDashboard'
import AMainLogin from './containers/LoginPage/Login/AMainLogin'
import UserRegister from './containers/Authentication/UserRegister'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import FirstDashboard from './containers/Dashboard/FirstDashboard/FirstDashboard'
import TodoDashb from './containers/Dashboard/FirstDashboard/TodoDashb'
import Calendar from './containers/Dashboard/Calendar/Calendar'
import Aactivity from './containers/Dashboard/Aactivity/Aactivity'
import SelectRole from './containers/Organization/SelectRole'
import ProfileView from './containers/Profile/ProfileView'
import AOrgManager from './containers/OrgRole/OrgManager/AOrgManager'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AMainLogin/>}/>
        <Route path="/userregister" element={<UserRegister/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/firstdash" element={<FirstDashboard/>}/>
        <Route path="/tododash" element={<TodoDashb/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/aactivity" element={<Aactivity/>}/>
        <Route path="/selectrole" element={<SelectRole/>}/>
        <Route path="/profile" element={<ProfileView/>}/>
      </Routes>
      </BrowserRouter>
      <AOrgManager/>
    </>
  )
}
export default App;



