import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Dropdown.css"
export default function Dropdown({categoriesData, setdropdown}) {
    const navigate = useNavigate();
    const submitHandle = (i) => {
      navigate(`/products?category=${i.title}`);
      setdropdown(false);
      window.location.reload();
    };
    return (
      <div className="dropdownclass  bg-white ">
        {categoriesData &&
          categoriesData.map((i, index) => (
            <div
              key={index}
              onClick={() => submitHandle(i)}
              className='dropdownlist'
            >
              <img
                src={i.image_Url}
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "contain",
                  marginLeft: "10px",
                  userSelect: "none",
                }}
                alt=""
              />
              <h3 className="m-3 droptitle">{i.title}</h3>
            </div>
          ))}
      </div>
    );
  };