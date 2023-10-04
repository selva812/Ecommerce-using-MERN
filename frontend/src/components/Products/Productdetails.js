import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function  Productdetails ({data}) {
    const [count,setcount]=useState(1)
    const [click,setclick]=useState(false)
    const navigate=useNavigate()
    const [select,setselect]= useState(1)
    
    return (
    <div className='bg-body'>
        {
            
             <div className=''>
                <div>
                    <div>
                        <div>
                            <img src={data.image_Url[select.url]} alt="" 
                            className='img-fluid'/>
                        </div>
                    </div>
                </div>
             </div>
}
    </div>
  )
}
