import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Senna from "../assets/senna.jpg";
import Prost from "../assets/prost.jpg";
import Schumacher from "../assets/schumacher.jpg";
import Hamilton from "../assets/hamilton.jpg";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const link = document.querySelectorAll(".link");
  const linkHoverReveal = document.querySelectorAll(".hover-reveal");
  const linkImages = document.querySelectorAll(".hidden-img");

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mousemove", (e) => {
      linkImages[i].style.opacity = 1;
      linkHoverReveal[i].style.transform = `translate(0%, -50% ) `;
      linkImages[i].style.transform =
        " translate(0px, -25%) rotate(5deg) scale(1, 1)";
      linkHoverReveal[i].style.left = e.clientX + "px";
    });

    link[i].addEventListener("mouseleave", (e) => {
      linkImages[i].style.opacity = 0;
      linkHoverReveal[i].style.transform = `translate(0%, 0%) rotate(-5deg)`;
      linkImages[i].style.transform =
        "translate(0px, -25%) rotate(-5deg) scale(0.7, 0.7)";
    });
  }

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">Legends</div>
          <div
            className="menu-toggle"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div className={navbarOpen ? "burger burgerOpen" : "burger"}>
              <span className={navbarOpen ? "topLine spin" : "topLine"}></span>
              <span
                className={navbarOpen ? "bottomLine spin" : "bottomLine"}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nav-overlay"
        style={{
          top: navbarOpen ? "0" : "-100%",
          transitionDelay: navbarOpen ? "0s" : "0s",
        }}
      >
        <ul className="nav-links">
          <li className="nav-item">
            <div className="link">
              <Link
                to="/"
                onClick={() => setNavbarOpen(!navbarOpen)}
                style={{
                  top: navbarOpen ? "0" : "120px",
                  transitionDelay: navbarOpen ? "0.8s" : "0s",
                }}
              >
                Ayrton Senna
              </Link>
              <div className="hover-reveal">
                <img className="hidden-img" src={Senna} alt="Ayrton Senna" />
              </div>
              <div className="nav-item-wrapper"></div>
            </div>
          </li>
          <li className="nav-item">
            <div className="link">
              <Link
                to="/projects"
                onClick={() => setNavbarOpen(!navbarOpen)}
                style={{
                  top: navbarOpen ? "0" : "120px",
                  transitionDelay: navbarOpen ? "0.9s" : "0s",
                }}
              >
                Alain Prost
              </Link>
              <div className="hover-reveal">
                <img className="hidden-img" src={Prost} alt="Alain Prost" />
              </div>
              <div className="nav-item-wrapper"></div>
            </div>
          </li>
          <li className="nav-item">
            <div className="link">
              <Link
                to="/about"
                onClick={() => setNavbarOpen(!navbarOpen)}
                style={{
                  top: navbarOpen ? "0" : "120px",
                  transitionDelay: navbarOpen ? "1s" : "0s",
                }}
              >
                Michael Schumacher
              </Link>
              <div className="hover-reveal">
                <img
                  className="hidden-img"
                  src={Schumacher}
                  alt="Michael Schumacher"
                />
              </div>
              <div className="nav-item-wrapper"></div>
            </div>
          </li>
          <li className="nav-item">
            <div className="link">
              <Link
                to="/contact"
                onClick={() => setNavbarOpen(!navbarOpen)}
                style={{
                  top: navbarOpen ? "0" : "120px",
                  transitionDelay: navbarOpen ? "1.1s" : "0s",
                }}
              >
                Lewis Hamilton
              </Link>
              <div className="hover-reveal">
                <img
                  className="hidden-img"
                  src={Hamilton}
                  alt="Lewis Hamilton"
                />
              </div>
              <div className="nav-item-wrapper"></div>
            </div>
          </li>
        </ul>
        <div className="nav-footer">
          <div
            className="location"
            style={{
              bottom: navbarOpen ? "0" : "-20px",
              opacity: navbarOpen ? "1" : "0",
              transitionDelay: navbarOpen ? "1.2s" : "0s",
            }}
          >
            <span>Bigorno, FR</span>
          </div>
          <div className="nav-social-media">
            <ul>
              <li>
                <a
                  href="#"
                  style={{
                    bottom: navbarOpen ? "0" : "-20px",
                    opacity: navbarOpen ? "1" : "0",
                    transitionDelay: navbarOpen ? "1.3s" : "0s",
                  }}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    bottom: navbarOpen ? "0" : "-20px",
                    opacity: navbarOpen ? "1" : "0",
                    transitionDelay: navbarOpen ? "1.4s" : "0s",
                  }}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
