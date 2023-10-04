import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import Header from "../components/Layout/Header"
import Hero from "../components/Route/Hero/Hero"
import Category from "../components/Route/Category/Category"
import Bestdeals from "../components/Bestdeals/Bestdeals"
import Featuredproduct from "../components/Featuredproduct/Featuredproduct"
import Eventcard from "../components/Event/Eventcard"
import Sponsored from "../components/Sponsored/Sponsored"
import Footer from "../components/Layout/Footer/Footer"
import "./Home.css"
export default function Home() {
     
  return (
    <div className=''>
      <Header activeheading={1}/>
      <Hero/>
      <Category/>
      <Bestdeals/>
      <h1 className='m-3'>Popular Event</h1>
      <Eventcard/>
      <Featuredproduct/>
      <Sponsored/>
      <Footer/>
    </div>
  )
}
