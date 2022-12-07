import React from "react";
import reblogo from "../images/REBLIUM.png";
import { FaCheck } from "react-icons/fa";
import checked from "../images/checked.svg";
import unchecked from "../images/unchecked.svg";
import { useState } from "react";

function Contact() {
  let [isChecked, setChecked] = useState(false);

  const onSetCheck = () => {
    let tmpChecked = isChecked;
    setChecked(!tmpChecked);
  };
  return (
    <>
      <div className="loading-area">
        <div className="loading-content">
          <img src={reblogo} alt="reblium-logo" />
        </div>
      </div>
      <main className="contact-area">
        <div className="contact-container">
          <div className="header">
            <div className="header-container">
              <div className="header-black">
                <div className="nav-area">
                  <div className="nav-logo">
                    <a href="/">
                      <img src={reblogo} alt="reblium-logo" />
                    </a>
                  </div>
                  <nav>
                    <ul className="nav-list">
                      <li className="nav-item">
                        <a href="/">FOR CREATORS & BRANDS</a>
                      </li>
                      <li className="nav-item">
                        <a href="/">WE BELIEVE</a>
                      </li>
                      <li className="nav-item">
                        <div className="nav-divider"></div>
                      </li>
                      <li className="nav-item gren">
                        <a href="/contact">CONTACT US</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-area">
            <div className="contact-form-header">
              <h1>
                READY TO BECOME <br /> A VIRTUAL <br /> INFLUENCER?
              </h1>
              <h4>
                You've come to the right place. Contact our team of experts to
                see
                <br />
                how we can help create your alter ego.
              </h4>
              <p>All field marked with * are required</p>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-item">
                  <h4>Email Address *</h4>
                  <input type="email" name="" className="form-input" />
                </div>
                <div className="form-item">
                  <h4>First Name *</h4>
                  <input type="text" name="" className="form-input" />
                </div>
                <div className="form-item">
                  <h4>Last Name *</h4>
                  <input type="text" name="" className="form-input" />
                </div>
                <div className="form-item">
                  <h4>Country *</h4>
                  <input type="text" name="" className="form-input" />
                </div>
                <div className="form-item">
                  <h4>Tell US More About Your Inquiry</h4>
                  <textarea className="form-input-ta"></textarea>
                </div>
                <div className="form-item w-check">
                  <img
                    className="checkbox-image"
                    src={isChecked ? checked : unchecked}
                    alt="checkbox"
                    onClick={() => onSetCheck()}
                  />
                  <p>
                    I want to receive helpful marketing communications from
                    Reblium via email.
                  </p>
                </div>
                <div className="form-btn-area">
                  <button className="form-sbmt footer-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
