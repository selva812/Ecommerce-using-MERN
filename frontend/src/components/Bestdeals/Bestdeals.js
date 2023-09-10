import React, { useEffect, useState } from 'react'
import { productData } from '../../static/data'
import "./Bestdeals.css"
import Productcart from "../Route/Productcart/Productcart.js"
export default function Bestdeals() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        const product= productData && productData.sort((a,b)=> b.total_sell - a.total_sell)
        const topfive = product.slice(0,5)
        setdata(topfive)
    },[])
  return (
    <div>
        <div className='shadow-lg rounded'>
            <div>
                <h3 className='m-3'>Best Deals</h3>
            </div>
            <div className=' bestdealslist '>
                {data && data.map((i,index)=>{
                  return <Productcart data={i} key={index} />
                })}
            </div>
        </div>
    </div>
  )
}
