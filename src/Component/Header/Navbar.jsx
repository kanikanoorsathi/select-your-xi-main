import React from "react";
import logo from "../../assets/logo.png"
import dollar from "../../assets/Currency.jpg"

const Navbar = () => {
  return (
    <div>
      <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <img className="w-10" src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Fixture</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">Schedules</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex justify-end items-center gap-3">
            <span>0</span><span>Coin</span>
            <img src={dollar} alt="" />
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Fixture</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">Schedules</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
