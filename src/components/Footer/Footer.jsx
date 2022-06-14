import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <a href="#" class="flex items-center mb-4 sm:mb-0">
          <img src={logo} class="footer-logo" alt="Movie Logo" />
          <span className="footer-name">Movie</span>
        </a>
        <ul className="footer-ul">
          <li>
            <a href="#" class="footer-info ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="footer-info">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="footer-info ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="footer-info">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="footer-last">
        © 2022{" "}
        <a href="#" class="hover:underline">
          Movie
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
