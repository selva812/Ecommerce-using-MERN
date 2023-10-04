import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer/Footer'
import Productdetails from "../components/Products/Productdetails"
import { useParams } from 'react-router-dom'
import { productData } from '../static/data'
export default function ProductsPagedetails() {
    const {name}= useParams()
    const [data,setdata]=useState(null)
    const productName=name.replace(/-/g," ")
    useEffect(()=>{
       const data=productData.find((i=>i.name === productName))
       setdata(data)
    },[productName])
  return (
    <div>
        <Header/>
        <Productdetails data={data}/>
        <Footer/>
    </div>
  )
}
