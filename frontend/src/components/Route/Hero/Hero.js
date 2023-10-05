import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div 
    className='relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat flex items-center'
    style={{
      backgroundImage:
        "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
    }}>
    
       <div className=' mx-auto w-[90%] 800px:w-[60%]'>
         <h1  className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`} > 
         Best selling for <br/> Home decoration </h1>
         <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]"> 
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Earum nostrum sapiente harum debitis aliquam laborum mollitia eaque ipsum beatae ducimus saepe, 
            dolores voluptatibus! Perferendis ad officiis nisi iure explicabo sit.
        </p>
        <Link to={"/product"} className='inline-block'>
            <div className=' mt-5 w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer'>
                <span className='text-[#fff] font-[Poppins] text-[18px]'>
                    Shop Now
                </span>
            </div>
        </Link>
       </div>
    </div>
  )
}

export default Hero