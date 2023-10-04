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
    <div className=' bg-white shadow p-3 pointer-event position-relative'>
        <Link to={`/product/${product_name}`}>
            <img src={data.image_Url[0].url}
             alt='' className='img-fluid'/>
        </Link>
        <Link className='text-decoration-none '>
         <h5 className=' text-bg-light text-info'>{data.shop.name}</h5>
        </Link>
        <Link to={'/product/${product_name'} className='text-decoration-none text-black '>
           <h4 >{data.name.length > 40 ? data.name.slice(0,40)+"..." : data.name}</h4>
            <div className="d-flex">
                <AiFillStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
                <AiFillStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
                <AiFillStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
                <AiFillStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
                <AiOutlineStar className='mx-2 pointer-event' color='#F6BA00' size={20}/>
            </div>
            <div className="py-2 position-relative">
                <div className="d-flex">
                    <h5>
                        {data.price === 0 ? data.price : data.discount_price}
                        $    
                    </h5>
                    <h4 className='text position-absolute top-0 end-100 start-50 text-decoration-line-through text-danger '>
                        {data.price ? data.price +"$" :null}
                    </h4>
                </div>
            </div>
            <span className='text text-success position-absolute bottom-0 start-50 h4'>
                    {data.total_sell} sold
                </span> 
        </Link>
        <div className='position-absolute top-0 end-0 m-2 d-flex flex-column'>
            {click ?
            <AiFillHeart 
             size={20}
             color={click ? 'red' : 'black'}
             onClick={()=>setclick(!click)}
             title='Remove from whislist'
             className='m-1'
             /> :
             <AiOutlineHeart
             size={20}
             onClick={()=>setclick(!click)}
             color={click ? 'red' : 'black'}
             title='Add to whislist'
             className='m-1'
             />
            }
            <AiOutlineEye
             size={20}
             onClick={()=>setopen(!open)}
             title='Quick view'
             color='#333'
             className='m-1'
             />
             <AiOutlineShoppingCart
             size={20}
             onClick={()=>setopen(!open)}
             color='#333'
             title='Add to Cart'
             className='m-1'
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
