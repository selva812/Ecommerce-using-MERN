import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "./Loginpage.css"
export default function Loginpage() {
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    }
  return (
    <div className="container d-flex justify-content-center align-items-center vh=100 flex-column">
      <div className="">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control "
                />
                {visible ? (
                  <VisibilityIcon
                    className=""
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <VisibilityOffIcon
                    className=""
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <button className="btn btn-success mt-3 ">Login</button>
            </form>
        </div>
    </div>
</div>
  )
}
