import React, { useState } from 'react'
import {RxCross1} from "react-icons/rx"
import "./Productcarddetail.css"
import {AiOutlineMessage,AiFillHeart,AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai"
export default function Productcartdetail({setopen,data}) {
    const [count,setcount]=useState(1)
    const [click,setclick]=useState(false)
    const handlemessage=()=>{

    }
    const handleincr=()=>{
      setcount(count+1)
    }
    const handledec=()=>{
      count > 0 ? setcount(count-1) : setcount(0)
    }
  return (
    <div className='pcdmain '>
        {data ? 
        <div className=' pcdout overflow-scroll container-fluid '> 
            <div className='position-relative d-md-flex p-4 bg-body  '>
                <RxCross1 size={30} onClick={()=>setopen(false) }
                className='pcdprocrossicon '
                 />
                 <div className=' '>
                   <div className="w-auto  ">
                    <img src={ data.image_Url[0].url} className='pcdproimg' alt=""/>
                    <div className='d-flex flex-column'>
                      <img src={data.shop.shop_avatar.url}
                      className='pcdshopicon' alt="" />
                      <div >
                        <h3 className='pcdshopname'>{data.shop.name}</h3>
                        <h5 className='pcdrating'>{data.shop.ratings} Ratings</h5>
                      </div>
                      <div onClick={()=>handlemessage()} className='mt-2'>
                        <span className='btn btn-dark'>
                          Send Message <AiOutlineMessage/>
                        </span>
                      </div>
                      <h5 className='text-danger' >{data.total_sell} Sold Out</h5>
                     </div>
                   </div>
                </div>
                <div className='pcdbox'>
                   <div className="text-sm-start ">
                    <h1 className='pcdproname'>{data.name}</h1>
                    <p> {data.description}</p>
                   </div>
                   <div className="d-flex position-relative ">
                    <h4> {data.discount_price}$</h4>
                    <h3  className='pcddis text-decoration-line-through text-danger'>
                      {data.price ? data.price + "$" : null}</h3>
                   </div>
                   <div className="d-flex justify-content-between ">
                    <div>
                      <button className='btn btn-primary' 
                      onClick={()=>handleincr()}>
                        +</button>
                      <span className='m-2 '>{count}</span>
                      <button className='btn btn-primary '
                      onClick={()=>handledec()}>
                        -</button>
                      </div>
                      <div className="">
                      {click ?
                          <AiFillHeart 
                          size={30}
                          color={click ? 'red' : 'black'}
                          onClick={()=>setclick(!click)}
                          title='Remove from whislist'
                          className='m-1'
                          /> :
                          <AiOutlineHeart
                          size={30}
                          onClick={()=>setclick(!click)}
                          color={click ? 'red' : 'black'}
                          title='Add to whislist'
                          className='m-1'
                          />
                       }
                      </div>
                    </div>
                    <div className="">
                      <span className='btn btn-dark mt-4'>
                        Add to Card <AiOutlineShoppingCart/>
                      </span>
                    </div>
                </div>
            </div>
        </div> : null}
    </div>
  )
}
