import React from 'react'
import { productData } from '../../static/data'
import Productcart from '../Route/Productcart/Productcart'
export default function Featuredproduct() {
  return (
    <div>
        <div className='w-11/12 mx-auto'>
            <div className='text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]'>
                <h3 >Featured Products</h3>
            </div>
            <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0 '>
                {productData && productData.map((i,index)=>{
                  return <Productcart data={i} key={index} />
                })}
                
            </div>
        </div>
    </div>
  )
}
