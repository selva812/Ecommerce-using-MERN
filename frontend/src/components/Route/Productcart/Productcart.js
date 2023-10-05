import React, { useState } from 'react'
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Productcartdetail from "../Productcartdetail/Productcartdetail"
export default function Productcart({data}) {
    const [click,setclick] =useState(false)
    const [open,setopen] =useState(false)
    const d=data.name
    const product_name=d.replace(/\s+/g,"-")
    return (
    <>
    <div className=' bg-white shadow p-3 cursor-pointer relative'>
        <Link to={`/product/${product_name}`}>
            <img src={data.image_Url[0].url}
             alt='' className='img-fluid'/>
        </Link>
        <Link className='text-decoration-none '>
         <h5 className=' text-bg-light text-info'>{data.shop.name}</h5>
        </Link>
        <Link to={'/product/${product_name'} className='text-decoration-none text-black '>
           <h4 >{data.name.length > 40 ? data.name.slice(0,40)+"..." : data.name}</h4>
            <div className="flex">
                <AiFillStar className='mx-2 cursor-pointer' color='#F6BA00' size={20}/>
                <AiFillStar className='mx-2 cursor-pointer' color='#F6BA00' size={20}/>
                <AiFillStar className='mx-2 cursor-pointer' color='#F6BA00' size={20}/>
                <AiFillStar className='mx-2 cursor-pointer' color='#F6BA00' size={20}/>
                <AiOutlineStar className='mx-2 cursor-pointer' color='#F6BA00' size={20}/>
            </div>
            <div className="py-2 flex items-center justify-between">
                <div className="flex">
                    <h5 className='font-bold text-[18px] text-[#333] font-Roboto'>
                        {data.price === 0 ? data.price : data.discount_price}
                        $    
                    </h5>
                    <h4 className='font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through'>
                        {data.price ? data.price +"$" :null}
                    </h4>
                </div>
            </div>
            <span className='font-[400] text-[17px] text-[#68d284]'>
                    {data.total_sell} sold
                </span> 
        </Link>
        <div >
            {click ?
            <AiFillHeart 
             size={20}
             color={click ? 'red' : 'black'}
             onClick={()=>setclick(!click)}
             title='Remove from whislist'
             className='cursor-pointer absolute right-2 top-5'
             /> :
             <AiOutlineHeart
             size={20}
             onClick={()=>setclick(!click)}
             color={click ? 'red' : 'black'}
             title='Add to whislist'
             className='cursor-pointer absolute right-2 top-5'
             />
            }
            <AiOutlineEye
             size={20}
             onClick={()=>setopen(!open)}
             title='Quick view'
             color='#333'
             className='cursor-pointer absolute right-2 top-14'
             />
             <AiOutlineShoppingCart
             size={20}
             onClick={()=>setopen(!open)}
             color='#333'
             title='Add to Cart'
             className='cursor-pointer absolute right-2 top-24'
             />
             {open ? <Productcartdetail 
             setopen={setopen} data={data}
             /> : null
             }
        </div>
    </div>
    </>
  )
}
