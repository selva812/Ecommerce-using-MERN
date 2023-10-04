import React, { useEffect, useState } from 'react'

export default function Calculatetimeleft() {
    const Calculatetimeleft = () =>{
        const difference = +new Date('2023-10-04') - +new Date()
        let timeleft={}
        if(difference >0){
            timeleft={
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 *60 ))%24),
                minutes: Math.floor((difference /1000 /60 )% 60),
                seconds: Math.floor((difference /1000) % 60)
            }
        }
        return timeleft
    }
    const [timeleft,settimeleft]= useState(Calculatetimeleft())
    useEffect(()=>{
        const timer = setTimeout(() => {
            settimeleft(Calculatetimeleft())
            
        }, 1000);
        return ()=>clearTimeout(timer)
    })
    
    const timecomponents = Object.keys(timeleft).map((interval)=>{
        if(!timeleft[interval]){
            return null
        }
        return <span>
            {timeleft[interval]} {interval}
        </span>
    })
  return (
    <div>
        {timecomponents.length ? timecomponents : <span> Time's Up </span>}
    </div>
  )
}
