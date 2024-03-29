import React, { useState, useEffect, useMemo } from "react";
import { Country, State, City } from "country-state-city";
import toast from "react-hot-toast";
import reblogo from "../images/rebs.svg";
import api from "../api";
import checked from "../images/checked.svg";
import unchecked from "../images/unchecked.svg";
import { Scrollchor } from "react-scrollchor";
import openCloseNav from "../helper/openclosenav";

function Contact() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [inquiry, setInquiry] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [errorFirstname, setErrorFirstname] = useState(null);
  const [errorLastname, setErrorLastname] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorCountry, setErrorCountry] = useState(null);
  const [errorInquiry, setErrorInquiry] = useState(null);
  const [isSubmit, setSubmit] = useState(false);

  const getCountries = async () => {
    try {
      const result = await Country.getAllCountries();

      let allCountries = [];
      allCountries = result?.map(({ isoCode, name }) => ({
        isoCode,
        name,
      }));
      setCountries(allCountries);
    } catch (error) {
      setCountries([]);
    }
  };

  useEffect(() => {
    getCountries();
    scrollToTop();
    openCloseNavbar();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setErrorEmail("Please enter email address.");
      return;
    } else {
      setErrorEmail(null);
    }
    if (!firstname) {
      setErrorFirstname("Please enter first name.");
      return;
    } else {
      setErrorFirstname(null);
    }
    if (!lastname) {
      setErrorLastname("Please enter last name.");
      return;
    } else {
      setErrorLastname(null);
    }
    if (!country) {
      setErrorCountry("Please enter country name.");
      return;
    } else {
      setErrorCountry(null);
    }
    if (!inquiry) {
      setErrorInquiry("Please fill inquiry.");
      return;
    } else {
      setErrorInquiry(null);
    }

    api.contactUs(
      {
        email: email,
        last_name: firstname + " " + lastname,
        country: country,
        inquiry: inquiry,
      },
      (err, ret) => {
        if (!err) {
          setSubmit(true);
          // toast.success("Your email has just sent Reblium support team.");
        } else {
          toast.error("You email hasn't sent!");
        }
      }
    );
  };

  const onSetCheck = () => {
    let tmpChecked = isChecked;
    setChecked(!tmpChecked);
  };

  const scrollToTop = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  const openCloseNavbar = () => {
    const navMob = document.querySelector(".navbar-mob");
    if (navMob.style.display === "block") {
      openCloseNav();
    }
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
              <form onSubmit={handleSubmit}>
                <div className="form-item">
                  <h4>Email Address *</h4>
                  <input
                    type="email"
                    name=""
                    className="form-input"
                    defaultValue={email}
                    onKeyUp={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {errorEmail?.length > 0 && (
                    <span className="error">{errorEmail}</span>
                  )}
                </div>
                <div className="form-item">
                  <h4>First Name *</h4>
                  <input
                    type="text"
                    name=""
                    className="form-input"
                    defaultValue={firstname}
                    onKeyUp={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                  {errorFirstname?.length > 0 && (
                    <span className="error">{errorFirstname}</span>
                  )}
                </div>
                <div className="form-item">
                  <h4>Last Name *</h4>
                  <input
                    type="text"
                    name=""
                    className="form-input"
                    defaultValue={lastname}
                    onKeyUp={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                  {errorLastname?.length > 0 && (
                    <span className="error">{errorLastname}</span>
                  )}
                </div>
                <div className="form-item">
                  <h4>Country *</h4>
                  <select
                    className="form-input select-text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {countries.map(({ isoCode, name }) => (
                      <option
                        value={name}
                        key={isoCode}
                        selected={country == name ? "selected" : ""}
                      >
                        {name}
                      </option>
                    ))}
                  </select>
                  {errorCountry?.length > 0 && (
                    <span className="error">{errorCountry}</span>
                  )}
                </div>
                <div className="form-item">
                  <h4>Tell US More About Your Inquiry</h4>
                  <textarea
                    className="form-input-ta"
                    onChange={(e) => setInquiry(e.target.value)}
                  >
                    {inquiry}
                  </textarea>
                  {errorInquiry?.length > 0 && (
                    <span className="error">{errorInquiry}</span>
                  )}
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
                  <button
                    className="form-sbmt footer-btn"
                    type="submit"
                    disabled={!isChecked}
                  >
                    Submit
                  </button>
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
