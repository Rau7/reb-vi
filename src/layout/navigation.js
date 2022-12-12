import React, { useState, useEffect } from "react";
import reblogo from "../images/REBLIUM.png";

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
  );
};

export default Navigation;
