import React from 'react'
import { navItems } from '../../static/data'
import "./Navbar.css"
export default function Navbar({active}) {
  return (
    <div className="navbar-wrapper">
        <div className="container">
          <nav className='navbar navbar-expand-md navbar-static-top' id='navbar'>
            <button className='navbar-toggler ' type='button' 
                data-bs-toggle="collapse" data-bs-target="#menu"> 
                <span className=' navbar-toggler-icon'></span> 
            </button>
            <div className="collapse navbar-collapse " id='menu'>
                <ul className='navbar-nav '>
                {navItems && navItems.map((item,index)=>{
                     return <li className='nav-item' key={index}>
                         <a href={`${item.url}`} className={`${active === index + 1 ? "text-success nav-link" : "text-black nav-link" } fs-5`}>{item.title}</a>
                     </li>
                     })}
                </ul>        
            </div>
          </nav>
        </div>
    </div>
  )
}
