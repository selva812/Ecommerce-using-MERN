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
export default function Home() {
     
  return (
    <div className=''>
      <Header activeheading={1}/>
      <Hero/>
      <Category/>
      <Bestdeals/>
      <Eventcard/>
      <Featuredproduct/>
      <Sponsored/>
      <Footer/>
    </div>
  )
}
