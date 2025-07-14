import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import { Link } from "react-router-dom";
import photo from "../../assets/photo.webp";

const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-3 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm M.Ilhan Maghriby
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Full Stack Web Developer",
                2000,
                "Freelance MERN Stack Developer",
                2000,
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Fresh Graduated of Islamic Economics
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <Link
              to="https://www.linkedin.com/in/m-ilhan-maghriby-431328253/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </Link>
            <a
              href="/Resume.pdf"
              className="flex items-center gap-2 text-[1rem] bg-white border border-black px-7 py-2 sm:px-6 rounded-lg font-bold hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <Link to="https://github.com/ilhanmaghriby/">
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/m-ilhan-maghriby-431328253/">
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/ilhanmaghribyy/">
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/ilhan.magriby/">
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0 rounded-lg"
              src={photo}
              alt="mine"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
