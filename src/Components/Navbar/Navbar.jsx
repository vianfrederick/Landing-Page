import React, { useState } from "react";
import Logo from "../../images/logo.png";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  function handleClick() {
    setShowNav(!showNav);
  }

  return (
    <header className="bg-clr_secondary_400 pt-3">
      <div className="container w-[80%] mx-auto">
        <div className="flex justify-between">
          <a className="w-10" href="#">
            <img src={Logo} alt="logo" />
          </a>
          <div className="md:hidden">
            {!showNav && <TfiMenu
              onClick={handleClick}
              className="text-clr_primary_400 h-[2em] w-[1.5em] cursor-pointer"
            />}
            {showNav && <AiOutlineClose
              onClick={handleClick}
              className="text-clr_primary_400 h-[2em] w-[1.5em] cursor-pointer"
            />}
          </div>
          <nav className="desktop-nav max-[768px]:hidden w-[87%] max-w-[535px] mt-[0.7em]">
            <ul className="flex justify-between font-semibold desktop-nav-list">
              <li>
                <a className="hover" href="#">Home</a>
              </li>
              <li>
                <a className="hover" href="#">Services</a>
              </li>
              <li>
                <a className="hover" href="#">Reviews</a>
              </li>
              <li>
                <a className="hover" href="#">About Us</a>
              </li>
              <li>
                <a className="hover" href="#">Contact Us</a>
              </li>
              <li className="bg-clr_primary_400 rounded-full py-2 px-4 mt-[-0.5em]">
                <a className="nav-btn" href="#">Get Started</a>
              </li>
            </ul>
          </nav>
        </div>
        {showNav && (
          <nav className="mobile-nav md:hidden">
            <ul className="text-center mobile-nav-list font-semibold">
              <li>
                <a className="hover" href="#">Home</a>
              </li>
              <li>
                <a className="hover" href="#">Services</a>
              </li>
              <li>
                <a className="hover" href="#">Reviews</a>
              </li>
              <li>
                <a className="hover" href="#">About Us</a>
              </li>
              <li>
                <a className="hover" href="#">Contact Us</a>
              </li>
              <li style={{paddingBottom : "1rem"}}>
                <a className="bg-clr_primary_400 rounded-full py-2 px-4 nav-btn" href="#">Get Started</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
