import React, { useState } from 'react'
import "./Cart.css"
import {RxCross1} from "react-icons/rx"
import {IoBagHandleOutline} from "react-icons/io5"
import {HiOutlineMinusCircle, HiPlusCircle} from "react-icons/hi"
import { Link } from 'react-router-dom'
export default function Cart({setopencart}) {
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
        <RxCross1 size={30} onClick={()=>setopencart(false)}
        className='pointer-event mt-2'/>
        </div>
      <div className='d-flex '>
        <IoBagHandleOutline size={30}/>
        <h5 className='m-2'> 3 item</h5>
      </div>
      <br/>
      <div className="w-auto ">
        {cartdata && cartdata.map((i,index)=>{
          return <Cartsingle key={index} data={i} />
        })}
      </div>
      <div className=' px-4'>
        <Link to={"/checkout"} className='btn btn-danger'>
          <div className='d-flex align-items-center justify-content-center'>
            <h1 className='fs-5'> Checkout Now (USD $4050)</h1>
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
    <div className='p-4 border-black'>
      <div className='w-auto d-flex align-items-center '>
        <div >
          <div className='cartsingleplus' onClick={()=>setvalue(value+1)}>
            <HiPlusCircle size={18} color='red'
            className='pointer-event'/>
          </div>
          <span className='mx-2'>
            {value}
          </span>
          <div onClick={()=>{setvalue(value === 1 ? 1 : value-1)}} className='mx-1'>
            <HiOutlineMinusCircle size={18} color='grey'
            className='pointer-event'/>
          </div>
        </div>
        <img src='https://img.freepik.com/free-photo/black-card-with-monochrome-background_23-2148252447.jpg?w=996&t=st=1696264249~exp=1696264849~hmac=f56c1867af877882b611b7dd5dc21f6ae80d3eb11126dfc59247366ef7468be8'
         className='csimg' alt=""/>
         <div>
          <h1 className='fs-6 mx-2' >{data.name}</h1>
          <h4 className='fs-6 mx-2'> ${data.price}*{value}</h4>
          <h4 className='fs-6 mx-2 text-danger'> ${total_price}</h4>
         </div>
      </div>
    </div>
  )
}