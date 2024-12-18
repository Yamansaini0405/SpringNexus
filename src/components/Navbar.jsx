import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [search, setSearch] = useState("");

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      <div className="left-0 right-0 m-auto w-[90%] h-[4rem] border-bottom border-white flex  items-center justify-between   gap-4   px-2 md:px-16">
        <div className="logo text-2xl flex justify-center items-center gap-3">
          <button
            onClick={handleMenu}
            className="text-white text-2xl outline-none"
          >
            {isMenu ? "" : <RiMenu2Line />}
          </button>

          <a href="/" className="cursor-pointer">
            <h3 className="text-white font-[Inter] font-bold ">
              <span className="text-[#6db33f] ">Spring</span>Nexus
            </h3>
          </a>
        </div>

        <div
          className={`overflow-scroll scrollbar-hidden z-10 fixed top-0 left-0 h-full bg-black opacity-[0.9] text-white transition-transform duration-300 ease-in-out ${
            isMenu ? "translate-x-0" : "-translate-x-full"
          } md:w-[30%] w-[50%] shadow-lg`}
        >
          <h2 className=" text-2xl flex justify-end font-bold p-4 border-b border-gray-600">
            <RxCross2 onClick={() => setIsMenu(!isMenu)} />
          </h2>
          <ul className="p-4 space-y-2 text-center text-lg font-bold">
            <NavLink to="/">
              <li className="block p-2 hover:bg-green-600 rounded">Home</li>
            </NavLink>
            <NavLink to="/blog">
              <li className="block p-2 hover:bg-green-600 rounded">Blogs</li>
            </NavLink>
            <NavLink to='/resources'>
              <li className="block p-2 hover:bg-green-600 rounded">Resources</li>
            </NavLink>
            <NavLink to='/contact'><li className="block p-2 hover:bg-green-600 rounded">Contact</li></NavLink>
            
            <li className="block p-2 hover:bg-green-600 rounded">option</li>
            <li className="block p-2 hover:bg-green-600 rounded">option</li>
            <li className="block p-2 hover:bg-green-600 rounded">option</li>
            <li className="block p-2 hover:bg-green-600 rounded">option</li>
            <li className="block p-2 hover:bg-green-600 rounded">option</li>
            <li className="block p-2 hover:bg-green-600 rounded">option</li>
            <li className="block p-2 hover:bg-green-600 rounded">option</li>
            <li className="block p-2 hover:bg-green-600 rounded">option</li>
          </ul>
        </div>
        <div className="options  text-white hidden md:block">
          <ul className="flex text-xl font-bold gap-12 font-[Inter]">
            <NavLink
              to="/resources"
              className=" transition-transform duration-300 hover:text-green-500 transform hover:scale-125"
            >
              <li> Resources</li>
            </NavLink>
            <NavLink
              to="/blog"
              className=" transition-transform duration-300  hover:text-green-500 transform hover:scale-125"
            >
              <li>Blogs</li>
            </NavLink>
            <NavLink
              to="/contact"
              className=" transition-transform duration-300 hover:text-green-500 transform hover:scale-125"
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              to="/team"
              className=" transition-transform duration-300 hover:text-green-500 transform hover:scale-125"
            >
              <li>Team</li>
            </NavLink>
          </ul>
        </div>
        <div className="search flex justify-center items-center gap-4">
          <NavLink to="/login">
            <button className="px-6 py-2 text-[#fff] border border-[#6db33f] rounded-md font-semibold hover:bg-[#6db33f]">
              Login
            </button>
          </NavLink>
        </div>
      </div>

      {console.log(search)}
    </>
  );
}

export default Navbar;
