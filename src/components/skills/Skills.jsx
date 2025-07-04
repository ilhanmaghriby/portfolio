import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMysql,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={90}
                />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={90}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={85} />
                <ProgressBar
                  logo={<SiTypescript />}
                  name={"TypeScript"}
                  value={60}
                />
                <ProgressBar
                  logo={<SiNextdotjs />}
                  name={"Next Js"}
                  value={30}
                />
                <ProgressBar
                  logo={<SiNodedotjs />}
                  name={"Node Js"}
                  value={85}
                />
                <ProgressBar
                  logo={<SiExpress />}
                  name={"Express Js"}
                  value={75}
                />
                <ProgressBar logo={<SiMongodb />} name={"MongoDB"} value={90} />
                <ProgressBar logo={<SiMysql />} name={"MySQL"} value={50} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                className=""
                logo={<SiJavascript />}
                black={"white"}
                white={"black"}
                skill={"Javascript"}
              />

              <SkillBox
                logo={<SiNodedotjs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiReact />}
                black={"black"}
                white={"white"}
                skill={"React Js"}
              />
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
