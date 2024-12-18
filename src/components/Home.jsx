import React, { useState } from "react";
import Lottie from "lottie-react";
import HomeAnimation from "../assets/lotties/homeAnimation2.json";
import BlogCard from "./BlogCard";
import { FaChevronRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

function Home() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
    
      <div className="flex flex-col justify-center items-center   md:w-[100%] w-[95%] m-auto pb-8 mt-6">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-32 md:mt-8 md:w-[100%] w-[95%] m-auto">
          <div>
            <h3 className="text-3xl md:text-7xl font-bold text-white m-auto w-[90%] md:w-[100%] ">
              Welcome to <br /> <span className="text-[#6db33f] ">Spring</span>
              Nexus
            </h3>
            <p className=" m-auto text-sm md:text-xl mt-[1rem] md:mt-[1.5rem] text-white md:w-[40rem] w-[90%] font-[Inter] ">
              The vibrant community for Spring Boot enthusiasts! Collaborate,
              learn, and share insights on building roust, scalable
              applications. Join us to accelerate your journey with expert tips,
              resources, and like-minded developers!
            </p>
            <div className="flex justify-start items-center md:mt-14 mt-6 w-[90%] md:w-[100%] m-auto">
              <button
                className="bg-[#6db33f] text-white md:px-6 md:py-2 px-3 py-1 font-semibold rounded-xl  font-[Inter] md:text-xl text-lg"
                onClick={() => {
                  window.open(
                    "https://wa.me/+916388838022?text=Hi%2C%20I%20would%20like%20to%20join%20your%20Spring+Community%20",
                    "_blank"
                  );
                }}
              >
                Join Us
              </button>
            </div>
          </div>
          <div>
            <Lottie
              className="md:h-[25rem] md:w-[100%] w-[90%] h-[20rem] "
              animationData={HomeAnimation}
            />
          </div>
        </div>
        <div className="max-w-[73rem] flex md:flex-row flex-col justify-between items-center  md:mt-16 mt-4  w-[90%] space-y-4 md:space-y-0">
          <h1 className=" text-2xl md:text-[2.1rem] font-semibold text-white font-[Inter] ">
            Top Blogs
          </h1>
          <div className="searchbar flex justify-center items-center bg-white md:w-[27rem] w-[20rem] py-1 pr-2 rounded-2xl drop-shadow-[0_4px_6px_rgba(255,255,255,0.2)] transition  duration-3000">
            <IoMdSearch className="text-black text-3xl" />
            <input
              value={search}
              onChange={handleSearch}
              type="text"
              placeholder="Search..."
              className="px-4 py-2 outline-none md:w-[21rem]"
            />
            <FaChevronRight className="text-blue-800" />
          </div>
        </div>
        <BlogCard title='Spring Boot: 7 Mistakes to Avoid When Using the @Async Annotation' disc='Spring Boot does not enable asynchronous support. Ensure that the @EnableAsync annotation is added on the configuration class or the startup class to enable asynchronous functions....' author='Dylan Smith' img=''/>
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
}

export default Home;
