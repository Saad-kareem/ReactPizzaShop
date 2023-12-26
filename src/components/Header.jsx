import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="banner">
        <Navbar />
        <div className="banner-content">
          <div className="container">
            <div className="banner_text">
              <h3>Pizza Delivery</h3>
              <h1>SAAD PIZZINI</h1>
              <p>
                We Create Delicious pizza and deliver it with speed in your
                area.Feel free to order from our pizza menu or take home.
              </p>
              <div className="banner_btn">
                <a href="#orderpizza" className="btn btn-primary btnpiza">
                  Delievery Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
