import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-opacity-50 bg-black fixed w-full z-10">
    <div className="container-xl flex justify-between">
      <div className="nav">
        <h2 href="" className="text-black text-30">
          <img className="w-[100px]" src="./img/logo.png" alt="" />
        </h2>
      </div>
      <ul className="items-stretch hidden space-x-3 lg:flex ">
        <li className="flex">
          <NavLink
            to="/home"
            className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:border-red-600"
          >
            Home
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            to="/about"
            className="flex items-center px-4 -mb-1 border-b-2 border-transparent  text-white hover:border-red-600"
          >
            Contacts
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            to="/contax"
            className="flex items-center px-4 -mb-1 border-b-2 border-transparent  text-white hover:border-red-600"
          >
            News
          </NavLink>
        </li>
      </ul>

      <div className="items-center flex-shrink-0 hidden lg:flex">
        <button className="self-center px-5 py-2 rounded text-white hover:bg-red-600">
          <Link to='/login'>
          
          Sign in
          </Link>
        </button>
        <button className="self-center px-5 py-2 font-semibold rounded text-white hover:bg-red-600">
  
          <Link to="/register">         Sign up </Link>
        </button>
      </div>
      <button className="p-4 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </header>
  );
};

export default Header;
