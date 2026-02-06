import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Listed Books", path: "/readList" },
    { name: "Pages to Read", path: "/pages-to-read" },
  ];
  const Links = (
    <>
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            className="text-[14px] font-medium border border-transparent hover:border-[#23BE04] hover:text-[#23BE04] rounded-lg transition-all duration-300 px-4 py-2"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
  return (
    <div
      style={{ fontFamily: '"Playfair Display", serif' }}
      className="navbar bg-base-100 px-4 md:px-8"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-0 mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow gap-2"
          >
            {Links}
          </ul>
        </div>
        <a className="ml-1 text-2xl md:text-2xl lg:text-3xl font-extrabold cursor-pointer">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end gap-2 md:gap-4">
        <a className="btn btn-sm md:btn-md bg-[#23BE0A] hover:bg-[#1ea808] text-white border-none rounded-lg px-3 md:px-6">Sign in</a>
        <a className="btn btn-sm md:btn-md bg-[#59C6D2] hover:bg-[#4ab0ba] text-white border-none rounded-lg px-3 md:px-6">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
