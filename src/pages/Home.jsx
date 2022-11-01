import React from "react";
import reblogowhite from "../images/REBLIUM.png";
import {
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaDiscord,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "img-comparison-slider";
import img1 from "../images/455.webp";
import img2 from "../images/456.webp";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";

function Home() {
  return (
    <>
      <section className="grid-sec">
        <div className="grid-sec-container">
          <div className="grid-list">
            <div className="grid-2 left-img">
              <div className="content-img">
                <img src={p2} alt="reblium-snap-videos" />
              </div>
              <div className="content-area right-text">
                <div className="content-header c-right">
                  <h1>
                    Coustumize
                    <br />
                    <div className="bged-text">
                      <span className="yellow-back">Your Style</span>
                    </div>
                  </h1>
                </div>
                <div className="content-par">
                  <p>
                    Explore different looks with <br /> remixable fashion items
                    and in- <br /> app purchases from brands.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-2 right-img">
              <div className="content-area left-text">
                <div className="content-header c-left">
                  <h1>
                    Snap
                    <br />
                    <div className="bged-text">
                      <span className="purple-back">Videos</span>
                    </div>
                  </h1>
                </div>
                <div className="content-par">
                  <p>
                    Get your avatar from a phone <br /> scan to play with your
                    likeness <br />
                    and discover your authentic self.
                  </p>
                </div>
              </div>
              <div className="content-img">
                <img src={p3} alt="reblium-snap-videos" />
              </div>
            </div>
            <div className="grid-2 left-img">
              <div className="content-img">
                <img-comparison-slider id="comparison">
                  <img slot="first" src={img1} />
                  <img slot="second" src={img2} />
                </img-comparison-slider>
              </div>
              <div className="content-area right-text">
                <div className="content-header c-right">
                  <h1>
                    Your
                    <br />
                    <div className="bged-text">
                      <span className="yellow-back">Avatar</span>
                    </div>
                  </h1>
                </div>
                <div className="content-par">
                  <p>
                    Get your avatar from a phone <br /> scan to play with your
                    likeness <br />
                    and discover your authentic self.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="believe-sec">
        <div className="believe-content">
          <div className="believe-header">
            <h1>We Believe</h1>
          </div>
          <div className="content p1">
            <p>
              <span>We believe in self-expression.</span> On Reblium, creators
              of all types can express their alter egos. Be creative with your
              attributes, style, and animations to discover and share your true
              self!
            </p>
          </div>
          <div className="content p2">
            <p>
              <span>We believe in ownership.</span> By using cutting-edge
              blockchain technology, Reblium will give you full commercial
              rights to your avatar and digital wearables.
            </p>
          </div>
          <div className="content p3">
            <p>
              <span>We believe in the creator economy.</span> A future where
              anyone can foster, empower, and incentivize their communities with
              their alter ego. We want you to become the next virtual
              influencers. Not run by AI or studios but by creators for the
              community.
            </p>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-sec-container">
          <h1>
            You're a top content creator <br /> or a brand? Let's Talk!
          </h1>
          <p>
            Share you're excitement with us <br /> we'll write you back
            immediatly.
          </p>
          <a href="mailto:contact@reblium.com" target="_blank">
            contact@reblium.com &rarr;
          </a>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={reblogowhite} alt="reblium-logo" />
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
            <a href="#" className="footer-btn">
              Get Early Access
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;