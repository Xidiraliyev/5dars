import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillSunFill, BsMoonFill,BsCart3 } from "react-icons/bs";
import { useState, useEffect } from "react";

function Navbar() {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")));

  if (mode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    if (mode) {
      localStorage.setItem("mode", true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", false);
    }
  }, [mode]);

  return (
    <>
      <header className=" bg-neutral py-2 text-neutral-content">
        <div className="align-element flex justify-center sm:justify-end container">
          <div className="flex gap-x-6 justify-center items-center">
            <Link className="link link-hover text-xs sm:text-sm" to="/login">
              Sign in/Guest
            </Link>
            <Link className="link link-hover text-xs sm:text-sm" to="/register">
              Create Account
            </Link>
          </div>
        </div>
      </header>
      <nav className="bg-[#f0f6ff] ">
        <div className="navbar align-element container px-28">
          <div className="navbar-start ">
            <Link
              className="hidden lg:flex btn btn-primary text-3xl items-center active"
              to="/"
            >
              C
            </Link>
            <div className="dropdown">
              <label className="btn btn-ghost lg:hidden">
                <svg
                  className="h-8 w-8"
                  width="800px"
                  height="800px"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
                    fill="#000000"
                  />
                  <path
                    d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
                    fill="#000000"
                  />
                  <path
                    d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
                    fill="#000000"
                  />
                </svg>
              </label>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f0f6ff] rounded-box w-52">
                <li>
                  <NavLink className="capitalize" to="/">
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="capitalize" to="/about">
                    about
                  </NavLink>
                </li>
                <li>
                  <NavLink className="capitalize" to="/products">
                    products
                  </NavLink>
                </li>
                <li>
                  <NavLink className="capitalize" to="/cart">
                    cart
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
              <li>
                <NavLink className="capitalize" to="/">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink className="capitalize" to="/about">
                  about
                </NavLink>
              </li>
              <li>
                <NavLink className="capitalize" to="/products">
                  products
                </NavLink>
              </li>
              <li>
                <NavLink className="capitalize" to="/cart">
                  cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <label className="swap swap-rotate">
              <button
                onClick={() => setMode(!mode)}
                className="dark:text-white"
              >
                {mode ? (
                  <BsFillSunFill className="swap-on" />
                ) : (
                  <BsMoonFill className="swap-off" />
                )}
              </button>
            </label>
            <Link className="btn btn-ghost btn-circle btn-md ml-4" to='/cart'>
                  <div className="indicator">
                    <BsCart3 className="h-6 w-6"/>
                    <span className="badge badg-sm badge-primary indicator-item">0</span>
                  </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
