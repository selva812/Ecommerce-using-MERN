import React from 'react'
import "./Eventcard.css"
import Calculatetimeleft from "../Calculatetimeleft/Calculatetimeleft"
export default function Eventcard () {
  return (
    <>
        <div className='d-flex justify-content-between'>
            <div className='w-100'>
                <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="iphone 14 pro" className='img-fluid'  />
            </div>
            <div className=' m-4' style={{width:"160vw"}}>
                <h4 >Iphone 14pro max 8/256GB </h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate natus ratione ullam sit,soluta facere atque non aliquam assumenda placeat dolor qui provident hic error, 
                    quaerat eveniet ab, quibusdam voluptatem.Voluptate natus ratione ullam sit,soluta facere atque non aliquam assumenda placeat dolor qui provident hic error,
                </p>
                
                <div className=" d-flex justify-content-between position-relative">
                    <div>
                        <h5 className=' text-decoration-line-through text-danger' style={{fontSize:"3.5vw"}}>
                            1099$
                        </h5>
                        <h5 className='ech5  '> 990$ </h5>
                    </div>
                    <div>
                        <span className='mx-2 text-success'> 120 sold</span>
                    </div>
                </div>
                <Calculatetimeleft/>
            </div>
        </div>
    </>
  )
}
