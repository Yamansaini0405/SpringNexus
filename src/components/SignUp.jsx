import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SignupImg from "../assets/SignUp.avif";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted Successfully", formData);
      // Clear form data
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  return (
    <>
      <div className="bg w-[100%] h-[100vh] flex justify-center items-center">
        <div className="bg-white w-[90%] md:w-[60%] h-[80%] rounded-xl shadow-2xl flex justify-center items-center">
          <div className="max-w-[45%] h-[80%] hidden sm:block justify-center items-center">
            <img src={SignupImg} alt="" />
          </div>
          <div className="content flex flex-col justify-center items-start md:w-[50%] w-[95%] md:pl-20 pl-4">
            <h3 className="md:text-4xl text-3xl font-bold">
              <span className="text-[#6db33f] ">Welcome</span>, <br /> Register
              Now
            </h3>
            <form onSubmit={handleSubmit} className="w-[100%]">
            <div className="inputs flex flex-col justify-center items-start w-[95%] mt-6">
              <input
                type="text"
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border border-gray-400 px-6 py-2 rounded-lg md:w-[85%] w-[100%]  my-1"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
              <input
                type="text"
                placeholder="e-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-400 px-6 py-2 rounded-lg md:w-[85%] w-[100%]  my-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-400 px-6 py-2 rounded-lg md:w-[85%] w-[100%]  my-1"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
              <input
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border border-gray-400 px-6 py-2 rounded-lg md:w-[85%] w-[100%]  my-1"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="login-btn md:w-[80%] w-[95%] mt-2">
              <a href='/'>
              <button
                type="submit"
                className="outline-none  w-[100%] py-3 bg text-white rounded-lg text-xl font-semibold font-[Inter]"
              >
                SignUp
              </button>
              </a>
            </div>
            </form>
            
            <div className="mt-1 px-2">
              <h3 className="md:font-semibold">
                Already have a account?
                <span className="text-[#6db33f]">
                  <NavLink to="/login" className="font-bold">
                    &nbsp;Login
                  </NavLink>
                </span>
              </h3>
            </div>
            <div className="md:w-[85%] w-[95%] flex justify-center items-center mt-4">
              <hr className="w-[50%] border border-gray-600 mt-1 mx-1" />
              <p>or</p>
              <hr className="w-[50%] border border-gray-600 mt-1 mx-1" />
            </div>
            <div className="options flex justify-start items-center gap-6 px-2 mt-2 mb-2 md:w-[87%] w-[95%]">
              <div className="cursor-pointer google border border-black text-lg  py-2 w-[45%] flex justify-center items-center rounded-lg">
                <FcGoogle className="text-2xl " /> &nbsp; Google
              </div>
              <div className="cursor-pointer apple border border-black  text-lg  py-2 w-[45%] flex justify-center items-center rounded-lg">
                <FaGithub className="text-2xl " />
                &nbsp; Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
