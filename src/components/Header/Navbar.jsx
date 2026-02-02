import React from "react";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Listed Books", path: "/listed-books" },
    { name: "Pages to Read", path: "/pages-to-read" },
  ];
  const Links = (
    <>
      {menuItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.path}
            className="text-[14px] font-medium border border-transparent hover:border-[#23BE04] hover:text-[#23BE04] rounded-lg transition-all duration-300"
          >
            {item.name}
          </a>
        </li>
      ))}
    </>
  );
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-extrabold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn ml-4 bg-[#23BE0A] text-white rounded-lg">Sign in</a>
        <a className="btn ml-4 bg-[#59C6D2] text-white rounded-lg">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
