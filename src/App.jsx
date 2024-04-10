import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Authentication/Login'
import Register from './component/Authentication/Register'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
