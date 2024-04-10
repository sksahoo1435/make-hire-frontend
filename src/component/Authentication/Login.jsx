import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './auth.css';

const Login = () => {

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(loginData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <h2 className="form-container_header">Log In</h2>
        <p className="sign-in-message"> {`I don't have an account?`} <span onClick={()=>{navigate('/')}} >Signup</span></p>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={loginData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={loginData.password} onChange={handleChange} />
          </div>

          <button type="submit" className="custom-button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login