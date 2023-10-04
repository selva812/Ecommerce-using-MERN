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
        <div className="mb-2" >
          <div className="pdpmain">
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
