import React from "react";
import { CgPhone } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container d-block justify-content-center">
          <div className="row">
            <div className="col-5">
              <div className="FirstPart">
                <h1>About us</h1>
                <p>
                  Investigationes demonstraverunt lectores legere me lius quod
                  ii legunt saepius. Eodem modo typi, qui nunc nobis videntur.
                  Investigationes demonstraverunt lectores legere me lius quod
                  ii legunt saepius. Investigationes demonstraverunt lectores.
                </p>
                <h6>Monday to Saturday: 9.00 am to 9.00 pm</h6>
                <h6>Sunday: 10.00 am to 6.00 pm</h6>
              </div>
            </div>
              <div className="col-3 listing">
                <h1>Quick Links</h1>
                <ul>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Fast Delivery</a>
                  </li>
                  <li>
                    <a href="">Fast Delivery</a>
                  </li>
                  <li>
                    <a href="">Menu</a>
                  </li>
                </ul>
              </div>
              <div className="col-2 listing">
                <h1>Recepies</h1>
                <ul>
                  <li>
                    <a href="">Crazy Crust</a>
                  </li>
                  <li>
                    <a href="">Biscuit Bake</a>
                  </li>
                  <li>
                    <a href="">Margeritta</a>
                  </li>
                  <li>
                    <a href="">Prosciutto</a>
                  </li>
                  <li>
                    <a href="">Low Carb</a>
                  </li>
                </ul>
              </div>
              <div className="col-2 listing">
                <h1>Contact</h1>
                <ul>
                  <li>
                    <a href="">LiknedIn</a>
                  </li>
                  <li>
                    <a href="">+92396581580</a>
                  </li>
                  <li>
                    <a href="">GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">© SaadKarim | All Rights Reserved.</p>
        </div>
    </>
  );
};

export default Footer;
