import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className='sm:mx-auto sm:w-full sm:max-w-md' >
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-500' >
          Login to your account
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md' >
        <div className='bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10'>
        <form className=' space-y-6' onSubmit={(e)=>handleSubmit(e)} 
        encType="multipart/form-data">
        <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
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
                    className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
               </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className=" block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative ">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  id='password'
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm  "
                />
                {visible ? (
                  <VisibilityIcon className=' absolute right-2 top-2 cursor-pointer'
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <VisibilityOffIcon className='absolute right-2 top-2 cursor-pointer'
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input type="checkbox" name='remember-me'
                id='remember-me' className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded' />
                <label htmlFor='remember-me'
                 className='ml-2 block text-sm text-gray-900'>Remember me</label>
              </div>
                <Link to={"/forgot-password"} className="font-medium text-blue-600 hover:text-blue-500" >
                  Forgot password?</Link>
            </div>
            <button className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Login</button>
            <div className="flex items-center w-full">
              <p>Don't have an account? <Link to={"/registerpage"}
              className='text-blue-600 pl-2'>
                 Create account</Link></p>
            </div>
            </form>
        </div>
    </div>
</div>
  )
}
