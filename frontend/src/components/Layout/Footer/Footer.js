import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../../static/data";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className=" d-sm-flex justify-content-between d-block">
        <h1 className="m-5">
          <span className="mt-3">Subscribe</span> us for get news{" "}
          <br />
          events and offers
        </h1>
        <div className="m-5 ">
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="m-1 form-control"
          />
          <button className="btn btn-success m-1">
            Submit
          </button>
        </div>
      </div>
      <div className="d-block justify-content-evenly d-sm-flex">
        <ul className="px-5 text-center  ">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>The home and elements needeed to create beatiful products.</p>
          <div className="d-flex align-items-center ">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center  list-unstyled   ">
          <h1 className="mb-1 ">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className=""
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center list-unstyled ">
          <h1 className="mb-1 ">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className=""
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center list-unstyled ">
          <h1 className="mb-1 ">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className=""
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="d-flex align-items-center justify-content-center w-auto">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
