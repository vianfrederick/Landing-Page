import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-clr_secondary_800 text-[white] pt-12 mt-12 pb-10">
      <div className="container w-[80%] mx-auto">
        <div className="sm:gap-4 sm:grid min-[970px]:flex min-[970px]:justify-between footer-container">
          <div className="footer-nav-container">
            <ul className="flex justify-between">
              <div className="footer-nav-col-1">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </div>
              <div className="footer-nav-col-2">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
              </div>
            </ul>
          </div>
          <div className="mt-6 sm:mt-0 sm-icons-holder sm:ml-auto">
            <ul className="flex social-media-icons-container">
              <li>
                <a href="#">
                  <AiFillFacebook className="text-clr_primary_400 text-4xl" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineInstagram className="text-clr_primary_400 text-4xl" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineTwitter className="text-clr_primary_400 text-4xl" />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center mt-6 text-[0.9rem] sm:text-left min-[970px]:mt-0">
            <p>Copyright 2023. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
