import React from "react";
import pizza from "../Assets/pizza.jpg";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="About">
        <div className="container aboutText">
          <div className="row">
            <div className="col-6">
              <div className="about_img">
                <img src={pizza} />
              </div>
            </div>
            <div className="col-6 p-25">
              <h3>The Pizza Menu</h3>
              <h1>CHICAGO THIN CRUST</h1>
              <p>
                Investigationes demonstraverunt lectores legere me lius quod ii
                legunt saepius. Claritas est etiam processus dynaus, quise
                sequitur mutationem consuetudium lectorum.
              </p>
              <div className="banner_btn">
                <NavLink className="btn btn-primary btnpiza">View More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      
    </>
  );
}

export default Menu;
