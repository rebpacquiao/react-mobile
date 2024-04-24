import React, { useState } from "react";
import sevronLogo from "../assets/img/Sevron_Full.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap navigation items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <div className="main-nav">
        <a className="nav-title" href="#">
          <strong>
            <img src={sevronLogo} alt="Sevron Logo" className="img-logo" />
          </strong>
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setIsOpen(!isOpen)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:flex md:items-center md:w-auto`}
        id="menu"
      >
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
          <li className="border-b border-gray-300 md:border-b-0">
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              View as pdf
            </a>
          </li>
          <li className="border-b border-gray-300 md:border-b-0">
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              Share
            </a>
          </li>
          <li className="border-b border-gray-300 md:border-b-0">
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              Refer a friend
            </a>
          </li>
          <li className="border-b border-gray-300 md:border-b-0">
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              Report an issue
            </a>
          </li>
          <li className="border-b border-gray-300 md:border-b-0">
            <a
              className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
              href="#"
            >
              Leave a review
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
