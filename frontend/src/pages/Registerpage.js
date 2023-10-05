import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {RxAvatar} from "react-icons/rx"
import axios from "axios"
import { server } from '../Server';
import {useNavigate} from "react-router-dom"
export default function Registerpage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [name,setname]=useState("")
    const [repassword,setrepassword] =useState("")
    const [avatar,setavatar]=useState(null)
    const navigate=useNavigate()
    const handlefilesubmit=(e)=>{
     const file = e.target.files[0]
     setavatar(file)
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(password === repassword){
          const config = { headers: { "Content-Type": "multipart/form-data" } }
          const newForm = new FormData()
          newForm.append("file", avatar)
          newForm.append("name", name)
          newForm.append("email", email)
          newForm.append("password", password) 
          axios
            .post(`${server}/user/create-user`, newForm, config)
            .then((res) => {
              console.log(res)
              setEmail("")
              setPassword("")
              setname("")
              setavatar()
              if(res.data.success === true){
                navigate("/")
              }
            })
            .catch((err)=>{
              console.log(err.response.data)
            })
        }
        else{
          alert("Password doesn't match")
          setrepassword("")
        }
    }
  return (
    <div className=" min-h-screen flex items-center justify-center flex-col sm:px-6 py-12 lg:px-8">
      <div className="sm:max-w-md sm:mx-auto sm:w-full">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-6">
          Register your new account
        </h2>
      </div>
      <div className="mt-8 sm:max-w-md sm:mx-auto sm:w-full ">
        <div className="py-8 px-4 bg-white shadow sm:rounded-lg sm:px-10">
          <form className=" space-y-6" onSubmit={(e)=>handleSubmit(e)} encType="multipart/form-data">
          <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium">
                Name
              </label>
              <div className="mt-1">
                    <input
                    type="text"
                    name="name"
                    id='name'
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    className=" appearance-none w-full px-3 py-2 focus:outline-none mt-3 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
               </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium">
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
                    className="appearance-none w-full px-3 py-2 focus:outline-none mt-3 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
               </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium"
              >
                Password
              </label>
              <div className=" relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  id='password'
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none  w-full px-3 py-2 focus:outline-none mt-3 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                />
                {visible ? (
                  <VisibilityIcon className='absolute top-5 right-3 '
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <VisibilityOffIcon className='absolute top-5 right-3 '
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="retype-password"
                className="block text-sm font-medium"
              >
                Retype-Password
              </label>
              <div className="mt-1 d-flex align-items-center ">
                <input
                  type="password"
                  name="retype-password"
                  id='retype-password'
                  autoComplete="current-password"
                  required
                  value={repassword}
                  onChange={(e) => setrepassword(e.target.value)}
                  className="appearance-none w-full px-3 py-2 focus:outline-none mt-3 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
              <div className=' mt-2 flex items-center'>
                <span className='inline-block h-10 w-10 rounded-full overflow-hidden'> 
                {avatar ? (
                  <img src={URL.createObjectURL(avatar)} 
                  className='h-full w-full object-cover rounded-full'
                   alt="avatar" />
                ) :(
                  <RxAvatar className='h-8 w-8'/>
                )}
                </span>
                <label htmlFor='dp'
                 className=' ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
                <span>upload a profile pic
                </span>
                <input type="file" name="dp" id="dp" 
                className='sr-only'
                onChange={e=>handlefilesubmit(e)} 
                accept='.jpeg,.jpg,.png' />
                </label>
            </div>
            </div>
            <div >
            <button type='submit' 
            className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-blue-700">
              Register</button>
            </div>
            <div className='w-full'>
              <p>Already have a account? 
                <a href="/loginpage" className='text-blue-600 pl-5'>
                  Signup</a></p>
            </div>
            </form>
        </div>
    </div>
  </div>
  )
}
