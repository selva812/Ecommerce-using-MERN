import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import {BiMenuAltLeft} from "react-icons/bi"
import {IoIosArrowForward,IoIosArrowDown } from "react-icons/io"
import { productData } from '../../static/data'
import Dropdown from "./Dropdown.js"
import {CgProfile } from "react-icons/cg"
import { categoriesData } from '../../static/data'
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
        <div className="w-11/12 mx-auto">
          <div className='hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between '>
            <div >
                <Link to="/" >
                  <img  src="https://shopo.quomodothemes.website/assets/images/logo.svg" 
                  alt="Logo" />
                </Link>
            </div>
            {/* Search box */}
            <div className="w-[50%] relative ">
              <input
                type="text"
                placeholder="Search Product..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-[40px] w-full px-2 border-blue-400 border-[2px] rounded-md "
              />
              <AiOutlineSearch
                size={30}
                className=" absolute top-1.5 right-2 cursor-pointer"
              />
              {searchData && searchData.length !== 0 ? (
                <div className=" absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4 ">
                  {searchData &&
                    searchData.map((i, index) => {
                      const d = i.name;
                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="w-full flex items-start-py-3">
                            <img
                              src={i.image_Url[0].url}
                              alt=""
                              className="w-[40px] h-[40px] mr-[10px] "
                            />
                            <h1 >{i.name}</h1>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              ) : null}
              
            </div>
            <div className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer">
               <Link to={"/seller"} >
                <h1 className="text-[#fff] flex items-center">
                  Become Seller
                  <IoIosArrowForward className="ml-1" />
                </h1>
              </Link>
          </div>
          </div>
          </div>
        <div className={`transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px] `}>
          <div className="w-11/12 mx-auto relative flex items-center justify-between  ">
            <div onClick={()=>setdropdown(!dropdown)}>
              <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
                <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
                <button
                  className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                >
                  All Categories
                </button>
                <IoIosArrowDown
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setdropdown(!dropdown)}
                />
            {dropdown ? ( 
                <Dropdown
                  categoriesData={categoriesData}
                  setdropdown={setdropdown} />
                ) : null }
             </div>
            </div>
          <div className="flex items-center">
            <Navbar active={activeheading}/>
          </div>
          <div className='flex '>
              <div className="flex items-center">
              <div className="relative cursor-pointer mr-[15px]"
                onClick={() => setwhislist(true)}>
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className='absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center' >
                   0 </span>
              </div>
              </div>
              <div className="flex items-center">
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setopencart(true)}
                >
                  <AiOutlineShoppingCart
                    size={30}
                    color="rgb(255 255 255 / 83%)"
                  />
                  <span className='absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center' >
                    0 </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className='relative cursor-pointer mr-[15px]'>
                  {isAuthenticated ? 
                    <Link to={"/loginpage"}>
                      <img src={`${backend_url}/${user.avatar}`} 
                      className='w-[35px] h-[35px] rounded-full' alt=''/>
                    </Link>:
                    <Link to={"/loginpage"}>
                        <CgProfile size={40} color='rgb(255 255 255 / 83%)'/>                        
                    </Link>
                  }            
               </div>
              </div>
          </div>
        </div>
        </div>
        {opencart ? <Cart setopencart={setopencart}/> : null}
        {whislist ? <Whislist setwhislist={setwhislist}/> : null}
     </>
  )
}
