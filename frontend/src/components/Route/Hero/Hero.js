import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='container-fluid border'>
        <div className='position-relative'>
        <img src="https://pagefly.io/cdn/shop/articles/Add_a_heading_2.jpg?v=1683598198" alt=" img" className='img-fluid bghero' />
        </div>
       <div className='position-absolute top-50 w-50 text-white m-5'>
         <h1 > Best selling for <br/> Home decoration </h1>
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Earum nostrum sapiente harum debitis aliquam laborum mollitia eaque ipsum beatae ducimus saepe, 
            dolores voluptatibus! Perferendis ad officiis nisi iure explicabo sit.
        </p>
        <Link to={"/product"}>
            <div>
                <span className='btn btn-primary'>
                    Shop Now
                </span>
            </div>
        </Link>
       </div>
    </div>
  )
}

export default Hero