import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import "./Header.css" 
import {BiMenuAltLeft} from "react-icons/bi"
import {IoIosArrowForward,IoIosArrowDown } from "react-icons/io"
import { productData } from '../../static/data'
import Dropdown from "./Dropdown.js"
import {CgProfile } from "react-icons/cg"
import { categoriesData } from '../../static/data'
import "bootstrap/dist/js/bootstrap.bundle"
import { backend_url } from '../../Server'
import {useSelector} from "react-redux"
import Navbar from './Navbar'
import Cart from "./Cart.js"
import Whislist from "./Whislist.js"
export default function Header({activeheading}) {
    const {isAuthenticated,user} = useSelector((state)=>state.user)
    const [searchTerm,setsearchterm]= useState("")
    const [searchData,setsearchData]=useState(null)
    const [dropdown,setdropdown]= useState(false)
    const [opencart,setopencart]=useState(false)
    const[whislist,setwhislist]=useState(false)
    const handleSearchChange=(e)=>{
        const term= e.target.value
        setsearchterm(term)
        const filterproduct =productData && productData.filter((product)=>
            product.name.toLowerCase().includes(term.toLowerCase())
        )
        setsearchData(filterproduct)
    }

  return (
    <>
        <nav className="topcontainer container-fluid bg-body">
          <div className='d-flex row '>
            <div className="mx-3 mt-4 col-12 col-sm-2 col-md-3 col-lg-2 ">
                <img  src="https://shopo.quomodothemes.website/assets/images/logo.svg" 
                alt="Logo" className='img-fluid imagelogo'/>
            </div>
            <div className="topcenter my-4 col-12 col-sm-4 col-md-3 col-lg-2 ">
              <div >
              <input
                type="text"
                placeholder="Search Product..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="searchinput "
              />
              <AiOutlineSearch
                size={40}
                className="searchicon"
              />
              {searchData && searchData.length !== 0 ? (
                <div className="searchdata bg-body ">
                  {searchData &&
                    searchData.map((i, index) => {
                      const d = i.name;
                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}
                         className='searchdatalink'>
                          <div className="searchdatadiv">
                            <img
                              src={i.image_Url[0].url}
                              alt=""
                              className="searchdataimg"
                            />
                            <h1 className='searchdataname'>{i.name}</h1>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              ) : null}
              </div>
            </div>
            <div className="mx-3 my-4 btn btn-primary col-12 col-sm-1 col-md-2 col-lg-2 ">
               <Link to={"/seller"} className='toprightlink fs-4'>Seller 
               <IoIosArrowForward /> </Link>
          </div>
          </div>
        <div className={`navbar bg-primary  `}>
              <div className="navleft m-2 d-none d-sm-block  ">
                <button className=' btn btn-light' 
                onClick={()=>setdropdown(!dropdown)}>
                  <BiMenuAltLeft size={40}/> 
                  All categary 
                  <IoIosArrowDown  /> 
                  </button>
                {dropdown ? ( 
                <div className="navshow ">
                  <ul>
                    <Dropdown
                     categoriesData={categoriesData}
                      setdropdown={setdropdown} />
                  </ul>
                </div> ) : null }
              </div>
              <div className="">
                <Navbar active={activeheading}/>
              </div>
              <div className='d-flex align-items-center'>
                  <div className="navright m-2 position-relative">
                    <AiOutlineHeart size={40} onClick={()=>setwhislist(!whislist)}/>
                    <span className='whiscount text-center' > 0 </span>
                  </div>
                  <div className="navright m-2 position-relative">
                    <AiOutlineShoppingCart size={40} onClick={()=>setopencart(!opencart)}/>
                    <span className='whiscount text-center' > 0 </span>
                  </div>
                  <div className="navright m-2 position-relative">
                    {isAuthenticated ? 
                     <Link to={"/loginpage"}>
                       <img src={`${backend_url}/${user.avatar}`} className='profimg' alt=''/>
                     </Link>:
                      <Link to={"/loginpage"}>
                         <CgProfile size={40} color='black'/>                        
                      </Link>
                    }            
                  </div>
                  {console.log(isAuthenticated,user)}
              </div>
        </div>
        </nav>
        {opencart ? <Cart setopencart={setopencart}/> : null}
        {whislist ? <Whislist setwhislist={setwhislist}/> : null}
     </>
  )
}
