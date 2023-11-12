import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink, } from "react-router-hash-link";
import { HiMenu} from 'react-icons/hi';

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
        <HashLink
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          smooth
          to="/#"
        >
          Home
        </HashLink>
      </li>
      <li>
        <HashLink
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          smooth
          to="/#service"
        >
          Services
        </HashLink>
      </li>
      <li>
        <HashLink
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          smooth
          to="/#about"
        >
          About Us
        </HashLink>
      </li>
      <li>
        <HashLink
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          smooth
          to="/#contact"
        >
          Contact us
        </HashLink>
      </li>
    </>
  );
  return (
    <div
      className={
        scrolling
          ? "navbar md:p-10 bg-white fixed top-0 z-20 w-full mx-auto"
          : "md:p-10 fixed top-0 z-20 w-full mx-auto navbar transition duration-300 ease-in-out"
      }
    >
      <div className="lg:mx-auto md:w-[80%]">
        <div className={"navbar lg:p-4 fixed top-0 z-20 md:w-[80%] mx-auto"}>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiMenu className={scrolling ? 'text-xl text-black' : 'text-xl text-white'}></HiMenu>
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
          <div
            className={`navbar-end hidden lg:flex ${
              scrolling ? `text-black` : ` text-white`
            }`}
          >
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
