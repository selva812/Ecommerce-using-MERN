import {BrowserRouter,Route,Routes} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import {Loginpage,Registerpage,Activation,Home,ProductsPage,Bestselling
  ,Events,ProductsPagedetails} from "./Routes"
import Store from "./redux/store";
import { loadUser } from "./redux/action/user";
import { useEffect } from "react";
import FAQPage from "./pages/FAQpage";

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
              <Route  path="/product" element={<ProductsPage/>}></Route>
              <Route  path="/product/:name" element={<ProductsPagedetails/>}></Route>
              <Route path="/best-selling" element={<Bestselling/>}></Route>
              <Route path="/events" element={<Events/>}></Route>
              <Route path="/faq" element={<FAQPage/>}></Route>
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