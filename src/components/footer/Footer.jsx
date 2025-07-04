import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
          Let's Talk
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          {/* <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href=""
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a> */}
          <Link
            data-aos="fade-up"
            data-aos-duration="1200"
            to="https://www.linkedin.com/in/m-ilhan-maghriby-431328253/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoLinkedin className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-duration="1400"
            to="https://www.instagram.com/ilhanmaghribyy/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </Link>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2023 M.Ilhan Maghriby </span> All rights
          reserved |
        </div>
      </div>
    </div>
  );
};

export default Footer;
