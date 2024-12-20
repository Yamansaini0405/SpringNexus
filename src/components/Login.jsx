import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginImg from "../assets/3094352.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Login() {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };
  return (
    <>
      <div className="bg w-[100%] h-[100vh] flex justify-center items-center">
        <div className="bg-white w-[90%] md:w-[60%] py-6 rounded-xl shadow-2xl flex justify-center items-center">
          <div className="content md:px-8 md:pl-12 md:w-[50%] w-[90%] ">
            <h2 className="md:text-4xl text-3xl font-bold">
              Hello, <br />
              <span className="text-[#6db33f]"> Welcome</span> Back
            </h2>
            <div className="md:mt-6 mt-4">
              <input
                value={input}
                onChange={handleSearch}
                type="text"
                placeholder="mail or Username"
                className="border border-gray-400 px-6 py-2 rounded-lg md:w-[80%] w-[100%] m-auto my-4"
              />
              <input
                value={pass}
                onChange={handlePass}
                type="password"
                placeholder="passwornd"
                className="border border-gray-400 px-6 py-2 rounded-lg md:w-[80%] w-[100%] m-auto my-"
              />
            </div>
            <div className="mt-1 flex flex-col md:flex-row  items-start md:justify-between md:items-center p-1 w-[80%] ">
              <p className="hidden md:block">
                <input type="checkbox" id="checkbox" className="mr-1" />
                <label htmlFor="checkbox">Remember me</label>
              </p>

              <NavLink to="/" className="font-semibold">
                Forget Password?
              </NavLink>
            </div>

            <div className="login-btn md:w-[80%] w-[100%] md:mt-4 mt-2">
              <a href='/'>
              <button className="outline-none  w-[100%] py-3 bg text-white rounded-lg text-xl font-semibold font-[Inter]">
                Login
              </button>
              </a>
            </div>

            <div className="mt-1 px-2">
              <h3 className="md:font-semibold">
                Don't have account?
                <span className="text-[#6db33f]">
                  <NavLink to="/signup" className="font-semibold">
                    {" "}
                    Sign Up
                  </NavLink>
                </span>
              </h3>
            </div>
            <div className="md:w-[80%] w-[95%] flex justify-center items-center mt-4">
              <hr className="w-[50%] border border-gray-600 mt-1 mx-1" />
              <p>or</p>
              <hr className="w-[50%] border border-gray-600 mt-1 mx-1" />
            </div>
            <div className="options flex justify-start items-center gap-6 px-2 mt-2 mb-2 md:w-[80%] w-[95%]">
              <div className="google border border-black text-lg  py-2 w-[45%] flex justify-center items-center rounded-lg">
                <FcGoogle className="text-2xl cursor-pointer" /> &nbsp; Google
              </div>
              <div className="apple border border-black  text-lg  py-2 w-[45%] flex justify-center items-center rounded-lg">
                <FaGithub className="text-2xl cursor-pointer" />
                &nbsp; Github
              </div>
            </div>
          </div>
          <div className="max-w-[50%] h-[90%] hidden sm:block">
            <img src={LoginImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
