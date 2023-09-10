import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "./Loginpage.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify"
import { server } from '../Server';
import {useNavigate} from "react-router-dom"
export default function Loginpage() {
     const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post(`${server}/user/login-user`,{email,password},
      {withCredentials:true}).then((res)=>{
        toast.success("Login successful")
        navigate("/")
      }).catch((err)=>{
        toast.error(err.response.data.message)
      })
    }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
      <div >
        <h2 >
          Login to your account
        </h2>
      </div>
      <div >
        <div >
        <form  onSubmit={(e)=>handleSubmit(e)} encType="multipart/form-data">
        <div>
              <label
                htmlFor="email"
                className="form-label">
                Email address
              </label>
              <div className="mt-1">
                    <input
                    type="email"
                    name="email"
                    id='email'
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 form-control mb-2"
                    />
               </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="form-label"
              >
                Password
              </label>
              <div className="mt-1 d-flex align-items-center ">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  id='password'
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control "
                />
                {visible ? (
                  <VisibilityIcon className='visibleicon'
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <VisibilityOffIcon className='visibleicon'
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className='mt-3 d-flex align-items-center justify-content-evenly'>
              <div className='d-flex align-items-center'><input type="checkbox" className='form-check-input' />
              <label className='form-label m-2'>Remember me</label></div>
              <Link to={"/"}>Forgot password?</Link>
            </div>
            <button className="btn btn-success mt-3 ">Login</button>
            <div className="container mt-3">
              <p>Don't have an account? <Link to={"/registerpage"}> Create account</Link></p>
            </div>
            </form>
        </div>
    </div>
</div>
  )
}
