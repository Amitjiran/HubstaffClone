// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Dashboard from './components/Dashboard/MainDashboard/AMainDashboard'
// import AMainLogin from './components/LoginPage/Login/AMainLogin'
// function App() {
//   return (
//     <>
//     <AMainLogin/>
//    {/* <Dashboard/> */}
//     </>
//   )
// }

// export default App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard/MainDashboard/AMainDashboard'
import AMainLogin from './components/LoginPage/Login/AMainLogin'
import UserRegister from './components/Register/UserRegister/UserRegister'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import FirstDashboard from './components/Dashboard/FirstDashboard/FirstDashboard'
import TodoDashb from './components/Dashboard/FirstDashboard/TodoDashb'
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
      </Routes>
      </BrowserRouter>
    
    </>
  )
}
export default App;



