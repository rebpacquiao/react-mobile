import React from "react";
import navItems from "../data/navItems";

const Navbar = ({ show, setShow }) => {
  return (
    <nav className="p-2 mt-0 w-full">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-between items-center">
          <a className="text-dark font-bold" href="#">
            <div className="text-1xl lg:text-1xl">COSHH Risk Assessment</div>
            <div className="text-sm lg:text-sm">for industry Cleaner 500ml</div>
          </a>
          <button
            className="text-dark lg:hidden hover:text-gray-300"
            onClick={() => setShow(!show)}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {!show && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
              {show && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 0 1 1.414 0L12 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                />
              )}
            </svg>
          </button>
        </div>
        {show && (
          <div className="w-full md:w-1/2">
            <ul className="list-reset flex flex-col md:flex-row md:items-center md:justify-end text-center text-white">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="px-4 text-dark hover:text-gray-300"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
