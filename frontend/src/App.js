import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
function App() {
    return (
        <>
         <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home/>} ></Route>
              <Route path="/loginpage" element={<Loginpage/>} ></Route>
              <Route path="/registerpage" element={<Registerpage/>} ></Route>
           </Routes>
         </BrowserRouter>
        </>
    );
}
 
export default App;