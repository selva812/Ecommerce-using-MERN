import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Productcart({data}) {
    const [open,setopen]=useState(false)
    const d=data.name
    const product_name=d.replace(/\s+/g,"-")
    return (
    <>
    <div className='w-100 bg-white shadow-sm p-3 position-relative pointer-event'>
        <div className='d-flex justify-content-end'>
        </div>
        <Link to={`/product/${product_name}`}>
            <img src={data.image_Url[0].url}
             alt='' className='w-full object-fit-contain h-100'/>
        </Link>
        <Link>
         <h5>{data.shop.name}</h5>
        </Link>
        <Link to={'/product/${product_name'}>
           <h4>{data.name.length > 40 ? data.name.slice(0,40)+"..." : data.name}</h4>
        
        <div className="d-flex">
            <AiFillStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
            <AiFillStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
            <AiFillStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
            <AiFillStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
            <AiOutlineStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
        </div>
        <div className="py-2">
            <div className="d-flex">
                <h5>
                    {data.price === 0 ? data.price : data.discount_price}
                      $    
                </h5>
                <h4>
                    {data.price ? data.price +"$" :null}
                </h4>
            </div>
            <span>
                {data.total_sell} sold
            </span> 
        </div>
        </Link>
    </div>
    </>
  )
}
