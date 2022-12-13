import React, { useState, useEffect } from "react";
import reblogo from "../images/REBLIUM.png";
import { Scrollchor } from "react-scrollchor";

const Navigation = (props) => {
  const [modalHomeModal, setModalHomeModal] = useState(false);

  useEffect(() => {}, []);

  const onCloseHomeModal = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    setModalHomeModal(false);
  };

  const openCloseNav = () => {
    var x = document.querySelector(".navbar-mob");
    document.querySelector(".container").classList.toggle("change");

    const headerCont = document.querySelector(".header-container");
    const navMobCon = document.querySelector(".nav-mob-con");
    if (x.style.display === "block") {
      x.style.display = "none";
      headerCont.style.borderRadius = "20px";
    } else {
      x.style.display = "block";
      headerCont.style.borderRadius = "20px 20px 0px 0px";
      navMobCon.style.borderRadius = "0px 0px 20px 20px";
    }
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-black">
          <div className="nav-area">
            <div className="nav-logo">
              <a href="/" className="nav-link">
                <img src={reblogo} alt="reblium-logo" />
              </a>
            </div>
            <div className="nav-mob">
              <div className="nav-mob-nav">
                <div className="nav-mob-ham">
                  <div className="container" onClick={() => openCloseNav()}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
                </div>
              </div>
            </div>
            <nav>
              <ul className="nav-list">
                <li className="nav-item">
                  <Scrollchor to="creator" className="nav-link">
                    FOR CREATORS & BRANDS
                  </Scrollchor>
                </li>
                <li className="nav-item">
                  <Scrollchor to="webel" className="nav-link">
                    WE BELIEVE
                  </Scrollchor>
                </li>
                <li className="nav-item">
                  <div className="nav-divider"></div>
                </li>
                <li className="nav-item gren">
                  <a href="/contact" to="_blank">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="navbar-mob">
        <div className="nav-mob-con">
          <div className="nav-mob-black">
            <nav className="nav-mob">
              <ul className="mob-nav-list">
                <li className="nav-item-mob">
                  <Scrollchor to="creator" className="nav-link-mob">
                    FOR CREATORS & BRANDS
                  </Scrollchor>
                </li>
                <li className="nav-item-mob">
                  <Scrollchor to="webel" className="nav-link-mob">
                    WE BELIEVE
                  </Scrollchor>
                </li>
                <li className="nav-item-mob">
                  <div className="nav-divider-mob"></div>
                </li>
                <li className="nav-item-mob gren-mob">
                  <a href="/contact" to="_blank">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
