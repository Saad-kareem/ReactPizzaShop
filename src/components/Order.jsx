import React from "react";
import order from '../Assets/pizza1.jpg'

const Order = () => {
  return (
    <>
      <div className="Order" id="orderpizza">
        <div className="container  aboutText">
          <div className="row  orderstyle">
            <div className="col-7 ">
              <h3>Quick Delivery</h3>
              <h1>ORDER A PIZZA NOW</h1>
              <p>
                Investigationes demonstraverunt lectores legere me lius quod ii
                legunt saepius. Claritas est etiam processus.
              </p>
              <form
                className="formPizza"
                action="https://formspree.io/f/xnqeayne"
                method="POST"
              >
                <input
                  className="input1"
                  type="text"
                  placeholder="First Name"
                  required
                  name="FirstName"
                />
                <input type="text" placeholder="Last Name" name="Last Name" />

                <input
                  className="fullinput"
                  type="text"
                  placeholder="Enter Street Address"
                  required
                  name="Address"
                />

                <input className="input1" type="text" placeholder="House No." />
                <input
                  type="text"
                  placeholder="Phone Number"
                  required
                  name="House No"
                />

                <input
                  className="fullinput"
                  type="text"
                  placeholder="Pizza Type"
                  required
                  name="Pizza Type"
                />

                <input
                  className="input1 inputblock"
                  type="text"
                  placeholder="Number"
                  required
                  name="number"
                />
                <input type="text" placeholder="Size" name="size" required />
                <div className="btn1">
                  <input type="submit" value="send" className="sumbitbtn" />
                </div>
              </form>
            </div>
                 <div className="col-5 ">
                   <img className="imgorder" src={order} />
                 </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
