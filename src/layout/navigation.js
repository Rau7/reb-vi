import React, { useState, useEffect } from "react";
import reblogo from "../images/REBLIUM.png";
import { Scrollchor } from "react-scrollchor";
import { Route, Link, Redirect, useHistory } from "react-router-dom";
import openCloseNav from "../helper/openclosenav";

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

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-black">
          <div className="nav-area">
            <div className="nav-logo">
              <Link to="/" className="nav-link">
                <img src={reblogo} alt="reblium-logo" />
              </Link>
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
                  <Scrollchor to="#creator" className="nav-link">
                    FOR CREATORS & BRANDS
                  </Scrollchor>
                </li>
                <li className="nav-item">
                  <Scrollchor to="#webel" className="nav-link">
                    WE BELIEVE
                  </Scrollchor>
                </li>
                <li className="nav-item">
                  <div className="nav-divider"></div>
                </li>
                <li className="nav-item gren">
                  <Link to="/contact">CONTACT US</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="navbar-mob">
        <div className="nav-mob-con">
          <div className="nav-mob-black" onClick={() => openCloseNav()}>
            <nav className="nav-mob">
              <ul className="mob-nav-list">
                <li className="nav-item-mob">
                  <Scrollchor
                    to="#creator"
                    animate={{ offset: -200 }}
                    className="nav-link-mob"
                  >
                    FOR CREATORS & BRANDS
                  </Scrollchor>
                </li>
                <li className="nav-item-mob">
                  <Scrollchor
                    to="#webel-mob"
                    animate={{ offset: 120 }}
                    className="nav-link-mob"
                  >
                    WE BELIEVE
                  </Scrollchor>
                </li>
                <li className="nav-item-mob">
                  <div className="nav-divider-mob"></div>
                </li>
                <li className="nav-item-mob gren-mob">
                  <Link to="/contact">CONTACT US</Link>
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
