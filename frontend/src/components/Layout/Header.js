import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import "./Header.css" 
import {BiMenuAltLeft} from "react-icons/bi"
import {IoIosArrowForward} from "react-icons/io"
import { productData } from '../../static/data'
import {IoIosArrowDown } from "react-icons/io"
import Dropdown from "./Dropdown.js"
import {CgProfile } from "react-icons/cg"
import {navItems, categoriesData } from '../../static/data'
import "bootstrap/dist/js/bootstrap.bundle"
export default function Header() {
    const [searchTerm,setsearchterm]= useState("")
    const [searchData,setsearchData]=useState(null)
    const [dropdown,setdropdown]= useState(false)
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
        <div className="topcontainer col-12">
            <div className="topleft col-3 col-sm-3">
                <img  src="https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg" 
                alt="Logo" className='img-fluid imagelogo'/>
            </div>
            <div className="topcenter col-6 col-sm-6">
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
                <div className="searchdata ">
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
            <div className="topright btn btn-primary col-2 col-sm-1">
               <Link to={"/seller"} className='toprightlink'>Seller 
               <IoIosArrowForward /> </Link>
          </div>
        </div>
        <div className={`navbar bg-primary sticky-top `}>
              <div className="navleft m-2 d-none d-sm-block  ">
                <button className=' btn btn-light' onClick={()=>setdropdown(!dropdown)}><BiMenuAltLeft size={30}/> All categary <IoIosArrowDown  /> </button>
                {dropdown ? ( 
                <div className="navshow ">
                  <ul>
                    <Dropdown
                     categoriesData={categoriesData}
                      setdropdown={setdropdown} />
                  </ul>
                </div> ) : null }
              </div>
              <div className="d-flex align-items-center justify-content-space-around">
               <div className="navbar-wrapper">
                  <div className="container">
                   <nav className='navbar navbar-expand-md navbar-inverse navbar-static-top' id='navbar'>
                        <button className='navbar-toggler' type='button' 
                           data-bs-toggle="collapse" data-bs-target="#menu"> 
                           <span className=' navbar-toggler-icon'></span> 
                        </button>
                        <div className="collapse navbar-collapse" id='menu'>
                            <ul className='navbar-nav '>
                              {navItems && navItems.map((item)=>{
                                return <li className='nav-item'>
                                    <a href={`${item.url}`} className='nav-link'>{item.title}</a>
                                </li>
                              })}
                            </ul>        
                        </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center'>
                  <div className="navright m-2 position-relative">
                    <AiOutlineHeart size={30} />
                    <span className='whiscount text-center' > 0 </span>
                  </div>
                  <div className="navright m-2 position-relative">
                    <AiOutlineShoppingCart size={30} />
                    <span className='whiscount text-center' > 0 </span>
                  </div>
                  <div className="navright m-2 position-relative">
                    <CgProfile size={30} />
                  </div>
              </div>
        </div>
     </>
  )
}
