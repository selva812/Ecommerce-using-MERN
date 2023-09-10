import {BrowserRouter,Route,Routes} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import {Loginpage,Registerpage,Activation,Home} from "./Routes"
import Store from "./redux/store";
import { loadUser } from "./redux/action/user";
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    Store.dispatch(loadUser())
  },[])
    return (
        <>
         <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home/>} ></Route>
              <Route path="/loginpage" element={<Loginpage/>} ></Route>
              <Route path="/registerpage" element={<Registerpage/>} ></Route>
              <Route path="/activation/:activation_token" element={<Activation/>} ></Route>
           </Routes>
           <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
         </BrowserRouter>
        </>
    );
}
 
export default App;