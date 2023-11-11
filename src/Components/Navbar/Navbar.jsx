import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " focus:bg-transparent focus:text-sky-500 bg-sky-500 text-white"
              : "hover:bg-transparent hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="service"
          className={({ isActive }) =>
            isActive
              ? " focus:bg-transparent focus:text-sky-500 bg-sky-500 text-white"
              : "hover:bg-transparent hover:text-white"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? " focus:bg-transparent target:text-white focus:text-sky-500 bg-sky-500 text-white"
              : "hover:bg-transparent hover:text-white"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact-us"
          className={({ isActive }) =>
            isActive
              ? " focus:bg-transparent focus:text-sky-500 bg-sky-500 text-white"
              : "hover:bg-transparent hover:text-white"
          }
        >
          Contact us
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={
        scrolling
          ? "navbar p-10 bg-white fixed top-0 z-20 w-full mx-auto"
          : "p-10 fixed top-0 z-20 w-full mx-auto navbar transition duration-300 ease-in-out"
      }
    >
      <div className="mx-auto md:w-[80%]">
        <div
          className={"navbar p-4 fixed top-0 z-20 md:w-[80%] mx-auto"}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <Link to="/">
              <p className="md:text-3xl text-sky-400 font-bold">ShineHome</p>
            </Link>
          </div>
          <div className={`navbar-end hidden lg:flex ${scrolling? `text-black`: ` text-white`}`} >
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
