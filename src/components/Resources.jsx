import React, { useState } from "react";
import Lottie from "lottie-react";
import { IoSearchSharp } from "react-icons/io5";
import ResoursesAni from "../assets/lotties/Resources_Animation.json";
import ResourcesCard from "./ResourcesCard";

function Resources() {
  const [selected, setSelected] = useState([]);
  const [input, setInput] = useState("");
  const options = [
    "REST APIs",
    "IO",
    "Data Access",
    "Security",
    "Messaging",
    "Ops",
    "Batch Processing",
  ];
  console.log(input)
  const handleChange = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
    
  };
  return (
    <>
      <div className="pb-12">
      <div className="w-[90%] m-auto md:m-0 flex flex-col md:flex-row justify-center items-center md:py-12  ">
        <div className="md:w-[30%] w-[100%] py-3 md:py-2">
          <Lottie
            className="md:h-[13rem] md:w-[100%] w-[50%] m-auto h-[10rem] "
            animationData={ResoursesAni}
          />
        </div>
        <div className="disc md:w-[55%] w-[90%] space-y-4">
          <h2 className="font-semibold text-white md:text-5xl text-4xl">Resources</h2>
          <p className="text-gray-200 md:text-xl text-md">
            Whatever you're building, these resources are designed to get you
            productive as quickly as possible – using the latest Spring project
            releases and techniques as recommended by the Spring team.
          </p>
        </div>
      </div>
      <hr className="w-[80%] border border-[#6db33f] m-auto my-4 md:my-0" />
      <div className="search flex justify-start items-center border-2 border-white h-[3rem] md:w-[30%] w-[80%] m-auto gap-3 px-4 my-8">
        <IoSearchSharp className="text-white text-2xl" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Find resources"
          className="bg-transparent text-xl text-white outline-none"
          
        />
      </div>
      <div className="w-[85%] m-auto flex flex-col md:flex-row h-[100%]">
        <div className="category md:w-[20%] w-[90%] m-auto md:m-0 md:border-r border-b md:border-b-0 pb-4 border-gray-500">
        <h4 className="text-white font-bold text-2xl mb-2">Category</h4>
          <div className="flex md:flex-col flex-row flex-wrap gap-x-8 gap-y-2 md:gap-0">
            

            {options.map((option) => (
              <label
                key={option}
                className="flex items-center space-x-3 mb-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => handleChange(option)}
                  className="bg-transparent h-5 w-5 border-2 border-gray-400 rounded-md checked:bg-blue-300 checked:border-transparent focus:outline-none  "
                />
                <span className="text-gray-300">{option}</span>
              </label>
            ))}
          </div>
          <div className="mt-12">
            <h4 className="text-white font-bold text-2xl mb-2">
              Estimated time
            </h4>
            <div className="space-x-1 text-xl text-gray-300 mb-1">
              <input type="checkbox" className="rounder-2xl h-5 w-5" />{" "}
              <span>30min</span>
            </div>
            <div className="space-x-1 text-xl text-gray-300 mb-1">
              <input type="checkbox" className="rounder-2xl h-5 w-5" />{" "}
              <span>1h</span>
            </div>
          </div>
        </div>
        <div className="cards md:w-[95%] w-[100%] flex justify-center items-center md:px-4 overflow-scroll scrollbar-hidden flex-wrap  py-4">
          <ResourcesCard />
          <ResourcesCard />
          <ResourcesCard />
          <ResourcesCard />
          <ResourcesCard />
          <ResourcesCard />
          <ResourcesCard />
          <ResourcesCard />
          <ResourcesCard />
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Resources;
