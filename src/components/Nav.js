import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">Menu Effect</div>
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
            <Link
              to="/"
              onClick={() => setNavbarOpen(!navbarOpen)}
              style={{
                top: navbarOpen ? "0" : "120px",
                transitionDelay: navbarOpen ? "0.8s" : "0s",
              }}
            >
              Home
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              onClick={() => setNavbarOpen(!navbarOpen)}
              style={{
                top: navbarOpen ? "0" : "120px",
                transitionDelay: navbarOpen ? "0.9s" : "0s",
              }}
            >
              Projects
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              onClick={() => setNavbarOpen(!navbarOpen)}
              style={{
                top: navbarOpen ? "0" : "120px",
                transitionDelay: navbarOpen ? "1s" : "0s",
              }}
            >
              About
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              onClick={() => setNavbarOpen(!navbarOpen)}
              style={{
                top: navbarOpen ? "0" : "120px",
                transitionDelay: navbarOpen ? "1.1s" : "0s",
              }}
            >
              Contact
            </Link>
            <div className="nav-item-wrapper"></div>
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
            <span>Saint-Malo, FR</span>
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
