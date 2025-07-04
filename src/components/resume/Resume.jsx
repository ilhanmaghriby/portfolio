import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-10 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex  justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>

            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex  flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl ">
                  Freelance Web Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Freelancer
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  I develop and manage website projects for various clients
                  using modern technologies. In the process, I design and build
                  service-based websites using React.js, TypeScript, and
                  Tailwind CSS, ensuring responsive layouts and optimal
                  performance. I also collaborate with clients to understand
                  their business needs and translate them into effective digital
                  solutions. Additionally, I implement REST API and GraphQL to
                  ensure efficient data communication between the frontend and
                  backend. For user authentication and database management, I
                  utilize Supabase and Firebase. I conduct testing and debugging
                  to ensure system reliability and quality. Moreover, I provide
                  maintenance and feature enhancements based on user feedback.
                </p>
              </div>
            </div>

            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col mt-5 gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl ">
                  Frontend Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  PKS Digital School
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Mei 2023 - June 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  During the 2-month bootcamp, I have gained the knowledge and
                  skills to become a professional frontend engineer. I have
                  learned the basics of programming, Git and Gitlab, HTML, CSS,
                  JavaScript, and various frameworks and libraries such as React
                  JS and Tailwind CSS. Learned components & props, state &
                  components lifecycle, lists & forms, hooks, REST API with
                  axios, context, react router, UI templates (UI Design
                  Framework), authentication, and deployment for development. As
                  well as completing difficult level final projects. This
                  includes debugging problems, diagnosing root causes, and
                  identifying solutions.
                </p>
              </div>
            </div>

            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col mt-5 gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Program Merdeka Belajar Kampus Merdeka (MBKM) Universitas
                  Syiah Kuala Unggul
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Syiah Kuala University - Progate
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  August 2022 - November 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  I understand the concepts of Design Thinking and Project
                  Management and apply steps such as Discovery, Design,
                  Delivery, and Deduction in group assignments. In addition, I
                  will also master HTML and CSS to create layouts, headers,
                  footers, as well as modern responsive web pages with flexbox.
                  I will collaborate in web development using GitHub, and
                  understand JavaScript well, including the use of strings,
                  integers, variables, constants, conditional statements,
                  arrays, objects, functions, classes, and array methods. I will
                  also be able to create a web-based calculator application. In
                  addition, I will learn SQL to retrieve, process data, and use
                  subqueries, and complete e-commerce data analysis exercises
                  with SQL. The use of Node.js will also be part of my learning
                  to manage databases, implement Delete and Edit features, and
                  provide user account login and registration functionality.
                  Lastly, I have completed the JUNIOR WEB DEVELOPER Competency
                  Certification Test with number 020403 to prove my proficiency
                  in this field.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex ">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bachelor of Economics
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Syiah Kuala University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Sept 2020 - Mei 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Islamic Economics graduate specializing in Islamic Marketing
                  Management and Islamic Business Development, with a
                  concentration in Islamic Business Management. During my
                  studies, I wrote a thesis titled "Pengaruh Kualitas Pelayanan,
                  Kualitas Produk, Harga, Dan Religiusitas Terhadap Kepuasan
                  Pelanggan Pada Self Order Kiosk Mcdonald’s Di Kota Banda Aceh"
                  which explores the impact of various factors on customer
                  satisfaction at McDonald's self-order kiosks in Banda Aceh
                  City. I have a deep understanding of the principles of Islamic
                  economics, as well as their application in modern business.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
