import React from "react";
import { FaTwitter,FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ContactForm = () => {
  return (
    <>
      <div className="md:py-12 py-4">
        <div className="flex flex-col justify-center items-center md:w-[50%] w-[90%] m-auto md:mb-12 md:space-y-4 ">
          <h1 className="md:text-5xl text-3xl  font-semibold text-white">
            HAVE SOME QUERY?
          </h1>
          <p className="md:text-lg text-md text-gray-200 w-[80%] text-center">
            {" "}
            Please fill out the form below or e-mail us{" "}
            <a href="">springnexus@gmail.com</a> and we will get back to you
            promptly regarding your request
          </p>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-center md:items-center">
          <div className="bg-white md:w-[40%] w-[90%] m-auto md:m-0 md:p-8 p-4 rounded-xl h-full mt-12">
            <h3 className="text-[#000] text-3xl font-bold mb-2">Contact Us</h3>
            <hr className="border-2 border-[#000] w-[25%] ml-1 m-auto md:my-4 my-2" />
            <form className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-700"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-700"
                  placeholder="Last Name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-700"
                  placeholder="Phone"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-700"
                  placeholder="Email"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border-2  border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-700"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-black to-green-700 text-white font-semibold px-6 py-3 rounded-md hover:from-black hover:to-green-500 transition duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-[30%] w-[90%] md:px-16 px-9 flex flex-col justify-end mt-4 md:mt-0 space-y-4 mb-24">
            <div>
            <h3 className="md:text-3xl text-2xl text-white font-semibold">
              Request a call back
            </h3>
            <p className="text-md text-white md:mb-8 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique{" "}
            </p>
            </div>
            <div className="text-white">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-3">📞</span> +91 8941092513
                </li>
                <li className="flex items-center">
                  <span className="mr-3">📧</span> springnexus@gmail.com
                </li>
                <li className="flex items-center">
                  <span className="mr-3">📍</span> Muradnagar, Ghaziabad, Uttar
                  Pradesh, India
                </li>
              </ul>
            </div>
            <hr className="border border-gray-400 md:w-[90%] w-[100%] m-auto md:my-8 my-6   "/>
            <div className="icons flex justify-center items-center md:space-x-6 space-x-4 mb-4 md:mb-0 ">
              <div className="rounded-full border border-white w-10 h-10 p-2"> <FaTwitter className="text-2xl text-white"/></div>
              <div className="rounded-full border border-white w-10 h-10 p-2"><FaFacebookF className="text-2xl text-white"/></div>
              <div className="rounded-full border border-white w-10 h-10 p-2"><AiFillInstagram className="text-2xl text-white"/></div>
              <div className="rounded-full border border-white w-10 h-10 p-2"><FaLinkedinIn className="text-2xl text-white"/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
