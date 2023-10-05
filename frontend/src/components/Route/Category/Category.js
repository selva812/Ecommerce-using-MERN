import React from 'react'
import { brandingData,categoriesData } from '../../../static/data'
import { useNavigate } from 'react-router-dom'
const Category = () => {
    const navigate=useNavigate()
    const handlesubmit=(i)=>{
        navigate(`/products?category=${i.title}`)
    }
  return (
    <>
      <div className='hidden sm:block w-11/12 mx-auto'>
        <div className='branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md' >
            {brandingData && brandingData.map((i,index)=>{
              return  <div className='flex items-start ' key={index}>
                    {i.icon}
                    <div className='px-3'>
                        <h3 className='font-bold text-sm md:text-base'>{i.title}</h3>
                        <p className='text-xs md:text-sm'>{i.Description}</p>
                    </div>
                </div>
            })}
        </div>
     </div>
     <div className='w-11/12 mx-auto bg-white p-6 rounded-lg mb-12' 
        id='categories'>
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
            {categoriesData && categoriesData.map((i,index)=>{
                return <div className='w-full h-[100px] flex items-center justify-evenly cursor-pointer overflow-hidden'
                 key={index} onClick={()=>handlesubmit(i)}>
                    
                     <img src={i.image_Url}
                      className="w-[120px] object-cover"
                      alt=""  />
                       <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
                </div>
            })}
        </div>
        </div>
    </>
  )
}

export default Category