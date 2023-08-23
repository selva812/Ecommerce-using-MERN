import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {RxAvatar} from "react-icons/rx"
import "./Registerpage.css"
export default function Registerpage() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [name,setname]=useState("")
    const [repassword,setrepassword] =useState("")
    const [avatar,setavatar]=useState(null)
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(password === repassword){
        console.log("Password is same ")
      
      }
      else{
        console.log(" Please check the password")
        setrepassword("")
      }
    }
    const handlefilesubmit=(e)=>{
     const file = e.target.files[0]
     setavatar(file)
    }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
      <div className="">
        <h2 className="mt-6 ">
          Register your new account
        </h2>
      </div>
      <div className="mt-8 ">
        <div className="py-8 px-4 shadow ">
          <form className="" onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
              <label
                htmlFor="name"
                className="">
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
                    className="mt-1 form-control mb-2"
                    />
               </div>
            </div>
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
            <div>
              <label
                htmlFor="retype-password"
                className="form-label"
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
                  className="form-control "
                />
              </div>
            </div>
            <div>
              <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
              <div className=' mt-3 d-flex align-items-center'>
                <span className='h-25 w-25 overflow-hidden'> {avatar ? (
                  <img src={URL.createObjectURL(avatar)} className='dp img-fluid  rounded-circle' alt="avatar" />
                ) :(
                  <RxAvatar className='h-10'/>
                )}
                </span>
                <label htmlFor='dp' className='form-label '>
                <span>upload a profile pic
                </span>
                <input type="file" name="dp" id="dp" className='form-control mt-3'
                onChange={e=>handlefilesubmit(e)} 
                accept='.jpeg,.jpg,.png' />
                </label>
            </div>
            </div>
            <div className='d-flex justify-content-center'>
            <button className="btn btn-success mt-3  ">Register</button>
            </div>
            <div className='mt-3 mb-3'>
              <p>Already have a account? <a href="/loginpage" className='d'>Signup</a></p>
            </div>
            </form>
        </div>
    </div>
  </div>
  )
}