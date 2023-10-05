import React, { useState } from 'react'
import {RxCross1} from "react-icons/rx"
import {IoBagHandleOutline} from "react-icons/io5"
import {HiOutlineMinusCircle, HiPlusCircle} from "react-icons/hi"
import { Link } from 'react-router-dom'

import {AiOutlineHeart} from "react-icons/ai"
import {BsCartPlus} from "react-icons/bs"

export default function Whishlist({setwhislist}) {
  const cartdata=[
    {
      id:1,
      name:"iphone 14 8 gb ram 256gb rom",
      description:"test",
      price:980
    },
    {
      id:2,
      name:"iphone 14+ 8 gb ram 256gb rom",
      description:"test",
      price:990
    },
    {
      id:3,
      name:"iphone 15 8 gb ram 256gb rom",
      description:"test",
      price:1080
    },
  ]
  return (
    <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
      <div className='fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm'>
       <div className='flex w-full justify-end pt-5 pr-5'>
        <RxCross1 size={30} onClick={()=>setwhislist(false)}
        className='cursor-pointer'/>
        </div>
      <div className='flex items-center p-4 '>
        <IoBagHandleOutline size={30}/>
        <h5 className='pl-2 text-[20px] font-[500] '> 3 item</h5>
      </div>
      <br/>
      <div className="w-full border-t ">
        {cartdata && cartdata.map((i,index)=>{
          return <Cartsingle key={index} data={i} />
        })}
      </div>
      <div className=' px-5 mb-3'>
        <Link to={"/checkout"} >
          <div className='h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]'>
            <h1 className='text-[#fff] text-[18px] font-[600]'> Checkout Now (USD $4050)</h1>
          </div>
        </Link>
      </div>
      </div>
    </div>
  )
}

const Cartsingle=({data})=>{
  const [value,setvalue]= useState(1)
  const total_price=data.price*value
  return (
    <div className='p-4 border-b'>
      <div className='w-full flex items-center '>
        <RxCross1 size={30} />
        <img src='https://img.freepik.com/free-photo/black-card-with-monochrome-background_23-2148252447.jpg?w=996&t=st=1696264249~exp=1696264849~hmac=f56c1867af877882b611b7dd5dc21f6ae80d3eb11126dfc59247366ef7468be8'
         className='w-[130px] h-min ml-2 mr-2 rounded-[5px]' alt=""/>
         <div className="pl-[5px]">
          <h1 >{data.name}</h1>
          <h4 className='font-[400] text-[15px] text-[#00000082]'> ${data.price}*{value}</h4>
          <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto'> ${total_price}</h4>
         </div>
         <BsCartPlus size={30}/>
      </div>
    </div>
  )
}