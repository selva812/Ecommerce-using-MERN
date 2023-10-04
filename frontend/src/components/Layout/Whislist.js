import React, { useState } from 'react'
import "./Cart.css"
import {RxCross1} from "react-icons/rx"
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
    <div className='cartmain'>
      <div className='cartitem bg-body'>
       <div className='cartcross'>
        <RxCross1 size={30} onClick={()=>setwhislist(false)}
        className='mt-2 pointer-event'/>
        </div>
      <div className='d-flex '>
        <AiOutlineHeart size={30} className='mx-2'/>
        <h5 className='m-2'> 3 item</h5>
      </div>
      <br/>
      <div className="w-auto ">
        {cartdata && cartdata.map((i,index)=>{
          return <Cartsingle key={index} data={i} />
        })}
      </div>
    
      </div>
    </div>
  )
}

const Cartsingle=({data})=>{
  const [value,setvalue]= useState(1)
  const total_price=data.price*value
  return (
    <div className='p-4 border-black'>
      <div className='w-auto d-flex align-items-center justify-content-between '>
        <RxCross1 className='d-flex align-items-center pointer-event'/> 
        <img src='https://img.freepik.com/free-photo/black-card-with-monochrome-background_23-2148252447.jpg?w=996&t=st=1696264249~exp=1696264849~hmac=f56c1867af877882b611b7dd5dc21f6ae80d3eb11126dfc59247366ef7468be8'
         className='csimg' alt="" />
    
         <div>
          <h1 className='fs-6 mx-2' >{data.name}</h1>
          <h4 className='fs-6 mx-2 text-danger'> ${total_price}</h4>
         </div>
         <div>
          <BsCartPlus size={25} className='pointer-event'/>
         </div>
      </div>
    </div>
  )
}