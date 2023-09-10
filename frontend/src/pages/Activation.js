import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../Server'
import axios from 'axios'
export default function Activation() {
    const {activation_token}=useParams()
    const [error,seterror]=useState(false)
    useEffect(()=>{
        if(activation_token){
            const activationEmail=async()=>{
                try {
                    const res= await axios.post(`${server}/user/activation`,{
                        activation_token,
                    })
                    console.log(res.data.message)
                } catch (error) {
                    console.log(error.response.data.message)
                    seterror(true)
                }
            }
            activationEmail()
        }
    },[])
    return (
    <div >
        {error ? (<p>Token is expired</p>) : (<p>Your account activated successfully</p>)}
    </div>
  )
}
