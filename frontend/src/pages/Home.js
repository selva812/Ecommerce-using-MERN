import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import Header from "../components/Layout/Header"
import Hero from "../components/Route/Hero/Hero"
import Category from "../components/Route/Category/Category"
import Bestdeals from "../components/Bestdeals/Bestdeals"
import "./Home.css"
export default function Home() {
     
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Category/>
      <Bestdeals/>
    </div>
  )
}
