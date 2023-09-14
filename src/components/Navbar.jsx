import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillSunFill, BsMoonFill, BsCart3 } from "react-icons/bs";
import { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handleToggle =(e) => {
    if(e.target.checked){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }
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
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleToggle}/>

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <Link className="btn btn-ghost btn-circle btn-md ml-4" to="/cart">
              <div className="indicator">
                <BsCart3 className="h-6 w-6" />
                <span className="badge badg-sm badge-primary indicator-item">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
