import React, { useState } from "react";
import styled from "styled-components";
import { certificate } from "../data/certificate";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

const CertificateCard = () => {
  const Certif = [...certificate];

  return (
    <>
      {Certif.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <POPUP className="img-content relative">
              <div className="h-[280px] w-[400px] md:h-[260px] md:w-[92%] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={data.img}
                  alt={data.title}
                  className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>
              <div
                className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <div className=" flex items-center justify-center gap-4">
                  <Link
                    to={data.link}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Credential</p>
                  </Link>
                  <br className="w-[2px] bg-white" />
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-md font-medium text-center sm:text-lg mb-8  sm:mb-2">
              {data.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default CertificateCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
