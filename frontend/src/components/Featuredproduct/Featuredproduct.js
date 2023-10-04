import React from 'react'
import { productData } from '../../static/data'
import Productcart from '../Route/Productcart/Productcart'
export default function Featuredproduct() {
  return (
    <div>
        <div className='m-5 border mx-auto'>
            <div>
                <h3 className='m-3'>Best Deals</h3>
            </div>
            <div className='bestdealslist mx-5 '>
                {productData && productData.map((i,index)=>{
                  return <Productcart data={i} key={index} />
                })}
                
            </div>
        </div>
    </div>
  )
}
