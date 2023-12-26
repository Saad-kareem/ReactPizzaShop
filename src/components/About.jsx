import React from "react";
import { NavLink } from "react-router-dom";
import pizza from '../Assets/pizza.jpg'
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <div className="About">
        <div className="container aboutText">
          <div className="row">
            <div className="col-6 p-25">
             <div className="text-center">
              <h3 >About Us</h3>
              <h1 >WELOCOME TO SAAD PIZZINI</h1>
              <p>
                NY212 uses the finest ingredients. The ambiance of the
                restaurant gives off a cool NewYork vibe. NY212 has become my
                new favorite spot for authentic
              </p>
              </div>
              <div className="banner_btn">
                <NavLink className="btn btn-primary btnpiza">Read More</NavLink>
              </div>
            </div>
            <div className="col-6">
              <div className="about_img">
                <img src={pizza}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
