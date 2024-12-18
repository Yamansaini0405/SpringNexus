import React,{useState} from "react";
import blogImg from '../assets/blogImg.webp'
import {
  FaUser,
  FaCalendarAlt,
  FaComment,
  FaShare,
  FaHeart,
} from "react-icons/fa";

const BlogCard = ({title, disc, author, img}) => {
    // const [title, setTitle] = useState("Spring Boot: 7 Mistakes to Avoid When Using the @Async Annotation")
    // const [author, setAuthor] = useState("Dylan Smith")
    const [date, setDate] = useState("Dec 15th, 2024")
    // const [disc, setDisc] = useState(" Spring Boot does not enable asynchronous support. Ensure that the @EnableAsync annotation is added on the configuration class or the startup class to enable asynchronous functions....")

    const [like, setLike] = useState("1.3k")
    const [comment, setComment] = useState("465")

  return (
    <div className="max-w-[73rem] flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow-2xl p-6 mt-8 mb-2 w-[90%] ">
      <div className="md:max-w-4xl">
        <h2 className=" text-2xl md:text-[1.7rem] font-semibold text-black-700 mb-2">
          {title}
        </h2>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <div className="flex items-center mr-6">
            <FaUser className="mr-2" />
            <span>{author}</span>
          </div>

          <div className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            <span>{date}</span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4 md:max-w-[90%]">
          {disc}
        </p>

        <div>
          <div className="flex justify-between items-center max-w-[90%]">
            <a
              href="#"
              className="inline-block bg-[#6db33f] text-white md:px-4 px-2 md:py-2 py-1 rounded hover:bg-gray-800 transition duration-300"
            >
              Read more
            </a>
          
          <div className="flex justify-center items-center md:gap-4 gap-2 text-gray-700">
            <p className="flex justify-center items-center gap-1"><FaHeart />
            <span>{like}</span></p>
            <p className="flex justify-center items-center gap-1"><FaComment />
            <span>{comment}</span></p>
            {/* <FaShare /><span></span> */}
          </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:block w-[200px] h-[150px] bg-gray-300  items-center justify-center text-gray-500">
        <img
          src={blogImg}
          alt="Default Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BlogCard;
