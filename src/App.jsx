import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Authentication/Login'
import Register from './component/Authentication/Register'
import Dashboard from './component/Layouts/home/dashboard/Dashboard'
import ProfilePage from './component/Layouts/home/profile/ProfilePage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
