import React from "react";
import herovid from "../videos/herovidv4.mp4";
import reblogowhite from "../images/REBLIUM.png";
import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import peep1 from "../images/peep1.webp";
import peep2 from "../images/peep2.webp";
import peep3 from "../images/bailey.webp";
import peep4 from "../images/peep4.webp";
import peep5 from "../images/peep5.webp";
import reblogo from "../images/REBLIUM.png";
import p1 from "../videos/p1.mp4";
import p2 from "../videos/peep2.mp4";
import p3 from "../videos/peep3.mp4";
import {
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaDiscord,
  FaLinkedin,
  FaYoutube,
  FaBars,
} from "react-icons/fa";
import { Scrollchor } from "react-scrollchor";
import ham from "../images/hamburger.svg";

function Landing() {
  /*  
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

*/
  return (
    <>
      <main>
        <section className="hero">
          <div className="header">
            <div className="header-container">
              <div className="header-black">
                <div className="nav-area">
                  <div className="nav-logo">
                    <Scrollchor to="" className="nav-link">
                      <img src={reblogo} alt="reblium-logo" />
                    </Scrollchor>
                  </div>
                  <div className="nav-mob">
                    <div className="nav-mob-ham">
                      <img src={ham} alt="reb-ham" />
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
          </div>
          <div className="hero-container">
            <video src={herovid} autoPlay={true} muted loop></video>
            <div className="hero-exp">
              <h1>
                Create
                <br />
                Your
                <br />
                Alter Ego
              </h1>
              <p>
                Reblium helps creators make their alter ego <br /> to share
                content on social media.
              </p>
              <div className="hero-btn-area">
                <div className="corp-btn">
                  <a href="/contact" to="_blank" className="corp-link">
                    <div className="corp-flex">
                      <h4>GET EARLY ACCESS</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="expand-area" id="creator">
          <div className="expand-container">
            <h1>BE AUTHENTIC. BE YOURSELF.</h1>
            <h3 className="big-h3">
              BE WHOEVER <br /> YOU WANT TO BE
            </h3>
          </div>
        </section>
        <section className="landing-grid-area">
          <div className="landing-grid-container">
            <div className="lnd-grid-list">
              <div className="lnd-grid-item img-right">
                <div className="lnd-item-wrt-area">
                  <h1>
                    Create <br /> Your Avatar
                  </h1>
                  <p>
                    It all starts with your avatar. Fluidly blend between
                    gender, ethnicity, age and fantasy!
                  </p>
                </div>
                <div className="lnd-item-img-area">
                  <video src={p1} autoPlay={true} muted loop></video>
                </div>
              </div>
              <div className="lnd-grid-item img-left">
                <div className="lnd-item-img-area">
                  <video src={p2} autoPlay={true} muted loop></video>
                </div>
                <div className="lnd-item-wrt-area">
                  <h1>
                    Customize <br /> Your Style
                  </h1>
                  <p>
                    Explore different looks with our library of default fashion
                    items and in-app purchases.
                  </p>
                </div>
              </div>
              <div className="lnd-grid-item img-right">
                <div className="lnd-item-wrt-area">
                  <h1>
                    Create <br /> Content
                  </h1>
                  <p>
                    Combine poses, animations and backgrounds to create
                    shareable and meme-able content on Instagram, Tiktok,
                    Twitter and Snapchat.
                  </p>
                </div>
                <div className="lnd-item-img-area">
                  <video src={p3} autoPlay={true} muted loop></video>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="landing-message" id="webel">
          <div className="landing-m-container">
            <div className="landing-m-content">
              <h2>
                COMMUNITY BUILDING: <br /> IT'S IN OUR DNA
              </h2>
            </div>
          </div>
        </section>
        <section className="landing-info">
          <div className="landing-info-container">
            <div className="lnd-info-list">
              <div className="lnd-info-item">
                <h2>SELF-EXPRESSION</h2>
                <p>
                  On Reblium, creators of all types can express their alter
                  egos. Be creative with your attributes, style, and animations
                  to discover and share your true self!
                </p>
              </div>
              <div className="lnd-info-item">
                <h2>GIVING ownership</h2>
                <p>
                  By using cutting-edge blockchain technology, Reblium will give
                  you full ownership of your digital fashion items and license
                  you the commercial rights of your avatar.
                </p>
              </div>
              <div className="lnd-info-item">
                <h2>creator economy</h2>
                <p>
                  A future where anyone can foster, empower, and incentivize
                  their communities with their alter ego. We want you to become
                  the next virtual influencers. Not run by AI or studios but by
                  creators for the community.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="landing-links">
          <div className="landing-links-container">
            <div className="landing-links">
              <h1>Join the Rebellion</h1>
              <div className="lnd-links">
                <div className="lnd-item">
                  <a href="#">
                    <FaTwitter className="lnd-link-icon" />
                  </a>
                </div>
                <div className="lnd-item">
                  <a href="#">
                    <FaTiktok className="lnd-link-icon" />
                  </a>
                </div>
                <div className="lnd-item">
                  <a href="#">
                    <FaInstagram className="lnd-link-icon" />
                  </a>
                </div>
                <div className="lnd-item">
                  <a href="#">
                    <FaDiscord className="lnd-link-icon" />
                  </a>
                </div>
                <div className="lnd-item">
                  <a href="#">
                    <FaLinkedin className="lnd-link-icon" />
                  </a>
                </div>
                <div className="lnd-item">
                  <a href="#">
                    <FaYoutube className="lnd-link-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="corporate">
          <div className="corp-container">
            <div className="corp-header">
              <h1>
                YOU'RE A TOP CONTENT CREATOR <br /> OR A BRAND? LET'S TALK!
              </h1>
              <p>
                Share you're excitement with us <br /> we'll write you back
                immediatly.
              </p>
            </div>
            <div className="corp-btn-area">
              <div className="corp-btn">
                <a href="/contact" to="_blank" className="corp-link">
                  <div className="corp-flex">
                    <h4>Contact Us</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <Scrollchor to="" className="nav-link">
              <img src={reblogowhite} alt="reblium-logo" />
            </Scrollchor>
          </div>
          <p>Anyone can become a virtual influencer</p>
          <div className="footer-links">
            <div className="footer-item">
              <a href="#">
                <FaTwitter className="footer-link-icon" />
              </a>
            </div>
            <div className="footer-item">
              <a href="#">
                <FaTiktok className="footer-link-icon" />
              </a>
            </div>
            <div className="footer-item">
              <a href="#">
                <FaInstagram className="footer-link-icon" />
              </a>
            </div>
            <div className="footer-item">
              <a href="#">
                <FaDiscord className="footer-link-icon" />
              </a>
            </div>
            <div className="footer-item">
              <a href="#">
                <FaLinkedin className="footer-link-icon" />
              </a>
            </div>
            <div className="footer-item">
              <a href="#">
                <FaYoutube className="footer-link-icon" />
              </a>
            </div>
          </div>
          <div className="footer-btn-area">
            <div className="corp-btn">
              <a href="/contact" to="_blank" className="corp-link">
                <div className="corp-flex">
                  <h4>GET EARLY ACCESS</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landing;
