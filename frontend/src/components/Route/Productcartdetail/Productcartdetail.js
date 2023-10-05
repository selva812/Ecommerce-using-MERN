import React, { useState } from 'react'
import {RxCross1} from "react-icons/rx"
import {AiOutlineMessage,AiFillHeart,AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom'
export default function Productcartdetail({setopen,data}) {
    const [count,setcount]=useState(1)
    const [click,setclick]=useState(false)
    const handlemessage=()=>{

    }
    const handleincr=()=>{
      setcount(count+1)
    }
    const handledec=()=>{
      count > 0 ? setcount(count-1) : setcount(0)
    }
  return (
    <div className='bg-[#fff]'>
        {data ? 
        <div className=' fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center'> 
            <div className='w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] flex justify-evenly bg-white rounded-md shadow-sm relative p-4 '>
                <RxCross1 size={30} onClick={()=>setopen(false) }
                className='absolute right-3 top-3 z-50 '
                 />
                 <div className=' block ml-6 800px:flex'>
                   <div className="w-full 800px:w-[50%] ">
                    <img src={ data.image_Url[0].url} alt=""/>
                    <div className='flex flex-col'>
                      <Link to={`/shop/preview/${data.shop._id}`} className='flex' >
                      <img src={data.shop.shop_avatar.url}
                      className='w-[50px] h-[50px] rounded-full mr-2' alt="" />
                      <div >
                        <h3 className='pt-3 text-[15px] text-blue-400 pb-3'>
                          {data.shop.name}</h3>
                        <h5 className='pb-3 text-[15px]'>{data.shop.ratings} Ratings</h5>
                      </div>
                      </Link>
                      <div onClick={()=>handlemessage()} 
                      className='w-[150px]  my-3 flex items-center justify-center cursor-pointer  bg-[#000] mt-4 rounded-[4px] h-11 '>
                        <span className='text-[#fff] flex items-center'>
                          Send Message <AiOutlineMessage className='ml-1'/>
                        </span>
                      </div>
                      <h5 className='text-[16px] text-[red] mt-5' >
                        {data.total_sell} Sold Out</h5>
                     </div>
                   </div>
                </div>
                <div className='w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]'>
                    <h1 className=' font-[600] font-Roboto text-[#333] text-[20px]'>
                      {data.name}</h1>
                    <p> {data.description}</p>
                   <div className="flex pt-3">
                    <h4 className='font-bold text-[18px] text-[#333] font-Roboto'>
                       {data.discount_price}$</h4>
                    <h3  className='font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through'>
                      {data.price ? data.price + "$" : null}</h3>
                   </div>
                   <div className="flex items-center mt-12 justify-between pr-3 ">
                    <div>
                      <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out' 
                      onClick={()=>handleincr()}>
                        +</button>
                      <span className='bg-gray-200 text-gray-800 font-medium px-4 py-[11px]'>
                        {count}</span>
                      <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out '
                      onClick={()=>handledec()}>
                        -</button>
                      </div>
                      <div >
                      {click ?
                          <AiFillHeart 
                          size={30}
                          color={click ? 'red' : 'black'}
                          onClick={()=>setclick(!click)}
                          title='Remove from whislist'
                          className='cursor-pointer'
                          /> :
                          <AiOutlineHeart
                          size={30}
                          onClick={()=>setclick(!click)}
                          color={click ? 'red' : 'black'}
                          title='Add to whislist'
                          className='cursor-pointer'
                          />
                       }
                      </div>
                      </div>
                    
                <div className="w-[150px] bg-black  my-3 justify-center  cursor-pointer  mt-6 rounded-[4px] h-11 flex items-center">
                  <span className='text-[#fff] flex items-center'>
                    Add to Card <AiOutlineShoppingCart className='ml-1'/>
                  </span>
                </div>
            </div>
            </div>
        </div> : null}
    </div>
  )
}
