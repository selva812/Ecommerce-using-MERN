import React from 'react'
import { brandingData,categoriesData } from '../../../static/data'
import "./Category.css"
import { useNavigate } from 'react-router-dom'
const Category = () => {
    const navigate=useNavigate()
    const handlesubmit=(i)=>{
        navigate(`/products?category=${i.title}`)
    }
  return (
    <>
        <div className='shadow-lg  border rounded p-3 m-4 brandinglist'>
            {brandingData && brandingData.map((i,index)=>{
              return  <div className='d-flex align-items-start justify-content-space-between pointer-event g-2 ' key={index}>
                    {i.icon}
                    <div className='px-3'>
                        <h3>{i.title}</h3>
                        <p>{i.Description}</p>
                    </div>
                </div>
            })}
        </div>
        <div className=" categorylist shadow-lg  m-2 rounded">
            {categoriesData && categoriesData.map((i,index)=>{
                return <div className='d-flex justify-content-center align-items-center pointer-event' key={index} onClick={()=>handlesubmit(i)}>
                     <img src={i.image_Url} className=' categoryimg' alt="" />
                     <span>{i.title}</span>
                </div>
            })}
        </div>
    </>
  )
}

export default Category