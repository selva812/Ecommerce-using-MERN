import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/Productcart/Productcart";
import { productData } from "../static/data";
const Bestselling = () => {
  const [data,setdata]= useState([])
  useEffect(() => {
      const d = productData && productData.sort((a,b)=> b.total_sell - a.total_sell)
      setdata(d);
  },[]);

  return (
  <>
      <div >
        <Header activeheading={2} />
        <br />
        <br />
        <div className=" w-11/12 mx-auto" >
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
          </div>
          {data && data.length === 0 ? (
            <h1 className="text-center ">
              No products Found!
            </h1>
          ) : null}
        </div>
        <Footer />
    </div>
   
  </>
  );
};

export default Bestselling;
