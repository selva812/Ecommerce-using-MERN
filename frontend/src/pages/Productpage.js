import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/Productcart/Productcart";
import { productData } from "../static/data";
import "./Productpage.css"
const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data,setdata]= useState([])
  useEffect(() => {
    if (categoryData === null) {
      const d = productData && productData.sort((a,b)=> a.total_sell - b.total_sell)
      setdata(d);
    } else {
      const d =productData && productData.filter((i) => i.category === categoryData);
      setdata(d);
    }
  },[categoryData]);

  return (
  <>
      <div >
      <Header activeheading={3} />
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

export default ProductsPage;
