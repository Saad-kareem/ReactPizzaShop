import React from "react";

const Contact = () => {
  return (
    <>
      <div className="Contact ">
        <div className="container aboutText ">
          <div className="row">
            <div className="col-6">
              <h3>Contact Us</h3>
              <h1>WE WOULD LOVE TO WORK WITH YOU</h1>
              <p>
                Investigationes demonstraverunt lectores legere me lius quod ii
                legunt saepius. Claritas est etiam processus dynaus, quise
                sequitur mutationem consuetudium lectorum.
              </p>
              <div>
                <p>
                  <span> Monday to Saturday:</span> 9.00 am to 9.00 pm
                </p>
                <p>
                  {" "}
                  <span>Sunday:</span> 10.00 am to 6.00 pm
                </p>
              </div>
              <div>
                <p>
                  <span>Email: </span> saadkareem475@gmail.com
                </p>
                <p>
                  {" "}
                  <span>Phone:</span> (+92496581580)
                </p>
              </div>
            </div>
            <div className="col-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27479.212266365583!2d73.81640997987675!3d30.580324971299788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917f533050f2d17%3A0x53427eb5f4810c79!2sBas%C4%ABrpur%2C%20Okara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703575156070!5m2!1sen!2s"
                width="570"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="container containerForm ">
          <div className="row">
            <div className="col-12">
              <div className="contact_heading text-center">
                <h2>Take a Message</h2>
                <h1>WE CARE ABOUT YOUR OPINION</h1>
                <p>
                  nvestigationes demonstraverunt lectores legere me lius quise
                  sequitur mutationem consuetudium lectorum
                </p>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center w-100">
              <form className="contactUSForm"
              method="POST"
                 action="https://formspree.io/f/xnqeayne">
                <input className="input1" type="text" placeholder="FirstName"
                  required name="FirstName" />
                <input type="tex" placeholder="Last Name" name="LastName" required />

                <input className="input1" type="email" placeholder="Email"
                  required name="email" />
                <input type="text" placeholder="Subject" name="Subject" required />
                <textarea placeholder="Your Message"
                 required name="message"></textarea>
                <input className="sendmsg" type="submit" value="send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
