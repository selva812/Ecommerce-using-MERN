import React from 'react'
import Calculatetimeleft from "../Calculatetimeleft/Calculatetimeleft"
export default function Eventcard () {
  return (
    <>
        <div className='flex justify-between'>
            <div className='w-full lg:-w[50%] m-auto'>
                <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="iphone 14 pro" className='img-fluid'  />
            </div>
            <div className=' mr-7 w-full lg:[w-50%] flex flex-col justify-center'
             style={{width:"160vw"}}>
                <h2 className='text-[25px] font-[600] font-Roboto text-[#333]'>
                    Iphone 14pro max 8/256GB </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate natus ratione ullam sit,soluta facere atque non aliquam assumenda placeat dolor qui provident hic error, 
                    quaerat eveniet ab, quibusdam voluptatem.Voluptate natus ratione ullam sit,soluta facere atque non aliquam assumenda placeat dolor qui provident hic error,
                </p>
                
                <div className="flex justify-between py-2">
                    <div className='flex'>
                        <h5 className=' font-[500] text-[18px] text-[#d55b45] pr-3 line-through'
                         style={{fontSize:"3.5vw"}}>
                            1099$
                        </h5>
                        <h5 className='font-bold text-[20px] text-[#333] '> 990$ </h5>
                    </div>
                    <div>
                        <span className=' mr-14 font-[400] text-[17px] text-[#44a55e]'>
                             120 sold</span>
                    </div>
                </div>
                <Calculatetimeleft/>
            </div>
        </div>
    </>
  )
}
