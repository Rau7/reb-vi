import React from "react";
import herovid from "../videos/herovidlast.mp4";
import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import peep1 from "../images/peep1.webp";
import peep2 from "../images/peep2.webp";
import peep3 from "../images/bailey.webp";
import peep4 from "../images/peep4.webp";
import peep5 from "../images/peep5.webp";
import reblogo from "../images/REBLIUM.png";

function Landing() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 45) {
      const header = document.querySelector(".header");
      header.style.setProperty("top", "3rem");
    } else if (position < 45) {
      const header = document.querySelector(".header");
      header.style.setProperty("top", "10rem");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    var ticker = document.querySelector(".ticker"),
      list = document.querySelector(".ticker__list"),
      clone = list.cloneNode(true);

    ticker.append(clone);
  }, []);

  return (
    <>
      <section className="ticker-area">
        <div className="ticker">
          <div className="ticker__list">
            <div className="ticker__item ic-item">
              <FaRocket className="ticker-icon" />
            </div>
            <div className="ticker__item">
              <a href="#" className="ticker-lnk">
                CHECK OUT REBLIUM!
              </a>
            </div>
            <div className="ticker__item ic-item">
              <FaRocket className="ticker-icon" />
            </div>
            <div className="ticker__item">
              <a href="#" className="ticker-lnk">
                HEAR FROM US!
              </a>
            </div>
            <div className="ticker__item ic-item">
              <FaRocket className="ticker-icon" />
            </div>
            <div className="ticker__item">
              <a href="#" className="ticker-lnk">
                GET YOUR AVATAR!
              </a>
            </div>
            <div className="ticker__item ic-item">
              <FaRocket className="ticker-icon" />
            </div>
          </div>
        </div>
      </section>
      <section className="lang-area">
        <div className="lang-container">
          <div className="lang-changer">
            <h3>English</h3>
          </div>
        </div>
      </section>
      <main>
        <section className="hero">
          <div className="header">
            <div className="header-container">
              <div className="header-black">
                <div className="nav-area">
                  <div className="nav-logo">
                    <img src={reblogo} alt="reblium-logo" />
                  </div>
                  <nav>
                    <ul className="nav-list">
                      <li className="nav-item">
                        <a href="">FOR BRANDS</a>
                      </li>
                      <li className="nav-item">
                        <a href="">ORIGINALS</a>
                      </li>
                      <li className="nav-item">
                        <a href="">ABOUT US</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-container">
            <video src={herovid} autoPlay={true} muted loop></video>
          </div>
        </section>
        <section className="expand-area">
          <div className="expand-container">
            <h1>Amplify. Expand.</h1>
            <h3 className="big-h3">Go Bigger</h3>
            <p>
              Jellysmack helps creators grow their communities <br /> and
              maximize their earnings across multiple social media platforms.
            </p>
          </div>
        </section>
        <section className="partners-area">
          <div className="partners-container">
            <div className="partners-part">
              <div className="partners-grid">
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep1})` }}
                ></div>
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep2})` }}
                ></div>
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep3})` }}
                ></div>
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep4})` }}
                ></div>
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep5})` }}
                ></div>
              </div>
            </div>
            <div className="partner-break">
              <h1>MEET OUR CREATOR PARTNERS</h1>
            </div>
            <div className="partners-part">
              <div className="partners-grid">
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep1})` }}
                ></div>
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep2})` }}
                ></div>
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep3})` }}
                ></div>
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep4})` }}
                ></div>
                <div
                  className="single-partner"
                  style={{ backgroundImage: `url(${peep5})` }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="landing-message">
          <div className="landing-m-container">
            <div className="landing-m-content">
              <h2>
                COMMUNITY BUILDING: <br /> IT'S IN OUR DNA
              </h2>
              <p>
                We know how to help creators because we are creators.
                <br /> Our Jellysmack Original channels are living proof.
              </p>
            </div>
          </div>
        </section>
        <section className="stats">
          <div className="stats-container">
            <div className="stats-list">
              <div className="stats-item">
                <a href="#" className="stats-link pinkish">
                  <div className="part-1">
                    <div className="p1-icon">
                      <FaRocket className="p1-ico" />
                    </div>
                    <div className="p1-wrt">
                      <h2>Beauty Studio</h2>
                    </div>
                  </div>
                  <div className="part-2">
                    <div className="p2-wrt-1">
                      <h4>89m total followers</h4>
                    </div>
                    <div className="p2-dot"></div>
                    <div className="p2-wrt-2">
                      <h4>89m total followers</h4>
                    </div>
                    <div className="part-3">
                      <div className="arrow">
                        <FaRocket className="arrow-ico" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="end-stats-item"></div>
              </div>
              <div className="stats-item">
                <a href="#" className="stats-link blueish">
                  <div className="part-1">
                    <div className="p1-icon">
                      <FaRocket className="p1-ico" />
                    </div>
                    <div className="p1-wrt">
                      <h2>Beauty Studio</h2>
                    </div>
                  </div>
                  <div className="part-2">
                    <div className="p2-wrt-1">
                      <h4>89m total followers</h4>
                    </div>
                    <div className="p2-dot"></div>
                    <div className="p2-wrt-2">
                      <h4>89m total followers</h4>
                    </div>
                    <div className="part-3">
                      <div className="arrow">
                        <FaRocket className="arrow-ico" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="end-stats-item"></div>
              </div>
              <div className="stats-item">
                <a href="#" className="stats-link greenish">
                  <div className="part-1">
                    <div className="p1-icon">
                      <FaRocket className="p1-ico" />
                    </div>
                    <div className="p1-wrt">
                      <h2>Beauty Studio</h2>
                    </div>
                  </div>
                  <div className="part-2">
                    <div className="p2-wrt-1">
                      <h4>89m total followers</h4>
                    </div>
                    <div className="p2-dot"></div>
                    <div className="p2-wrt-2">
                      <h4>89m total followers</h4>
                    </div>
                    <div className="part-3">
                      <div className="arrow">
                        <FaRocket className="arrow-ico" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="end-stats-item"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="corporate">
          <div className="corp-container">
            <div className="corp-header">
              <h1>WE TAKE CORPORATE CONTENT TO THE NEXT LEVEL</h1>
            </div>
            <div className="corp-grid">
              <div className="corp-item-1">
                <div className="corp-icon">
                  <FaRocket className="corp-ico" />
                </div>
                <div className="corp-wrt">
                  <h3>MEDIA COMPANY LICENSING</h3>
                  <p>
                    We license valuable video IP to use on our popular
                    Jellysmack Original channels, generating revenue and
                    enhancing fandom.
                  </p>
                  <div className="corp-btn-area">
                    <div className="corp-btn">
                      <a href="#" className="corp-link">
                        <div className="corp-flex">
                          <FaRocket className="corp-link-ico" />
                          <h4>Media Licensing</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="corp-item-2">
                <div className="corp-icon">
                  <FaRocket className="corp-ico" />
                </div>
                <div className="corp-wrt">
                  <h3>MEDIA COMPANY LICENSING</h3>
                  <p>
                    We license valuable video IP to use on our popular
                    Jellysmack Original channels, generating revenue and
                    enhancing fandom.
                  </p>
                  <div className="corp-btn-area">
                    <div className="corp-btn">
                      <a href="#" className="corp-link">
                        <div className="corp-flex">
                          <FaRocket className="corp-link-ico" />
                          <h4>Media Licensing</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Landing;
