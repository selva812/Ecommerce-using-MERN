import React, { useEffect, useState } from 'react'
import { productData } from '../../static/data'
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
        <div className='w-11/12 mx-auto'>
            <div className='text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]'>
                <h3 className='m-3'>Best Deals</h3>
            </div>
            <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0'>
                {data && data.map((i,index)=>{
                  return <Productcart data={i} key={index} />
                })}
                
            </div>
        </div>
    </div>
  )
}
