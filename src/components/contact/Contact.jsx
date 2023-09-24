import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import Swal from "sweetalert2";

const Contact = () => {
  const [input, setInput] = useState({
    email: "",
    message: "",
    name: "",
  });

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwxkHOORyYdQKq64FgfPtzs9ip24rn7Na3HxY42XfcfzFxqaP-ZJSs9HBFP9nQXWWDpog/exec";
  const form = document.forms["hann-contact-form"];

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "email") {
      setInput(value);
    } else if (name === "name") {
      setInput(value);
    } else if (name === "message") {
      setInput(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        Swal.fire("Thank You!", "Your Message Has Been Sent!", "success");
        setInput({
          email: "",
          message: "",
          name: "",
        });
      })
      .catch((error) => {
        Swal.fire("Sorry", "Your Message Could Not Be Sent!", "error");
        setInput({
          email: "",
          message: "",
          name: "",
        });
      });
  };
  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div
        // data-aos="fade-up"
        className="relative mb-5"
      >
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-5xl font-bold sm:text-3xl mt-5 ">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              data-aos="zoom-in"
              className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            name="hann-contact-form"
            onSubmit={handleSubmit}
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
          >
            <input
              onChange={handleChange}
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.2)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              name="email"
              value={input.email}
              required
            />
            <input
              onChange={handleChange}
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.2)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. M.Ilhan Maghriby"
              name="name"
              value={input.name}
              required
            />
            <textarea
              onChange={handleChange}
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.2)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              value={input.message}
              placeholder="Write your message"
              name="message"
              required
            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
