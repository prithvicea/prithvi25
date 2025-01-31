"use client";
import React, { useState } from "react";

function FormFile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload

    if (!name || !email || !number) {
      alert("Please fill out all required fields!");
      return;
    }

    if (number === alternateNumber) {
      alert("Primary and alternate numbers should be different.");
      return;
    }

    // Handle form submission logic (e.g., API call or console log)
    console.log("Form submitted:");
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <form
        className="flex w-full h-fit flex-col"
        action=""
        onSubmit={() => {
          handleSubmit(event);
        }}
        method="post"
      >
        <div className="flex w-full items-center flex-col gap-8 py-10">
          <input
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E] "
            placeholder="Name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E] "
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E]
        [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Mobile Number"
            type="tel"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <input
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E] 
        [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Alternate Mobile Number"
            type="tel"
            onChange={(e) => {
              setAlternateNumber(e.target.value);
            }}
          />
        </div>
        <div className="flex py-10 justify-center">
          <button className="flex w-[60%] justify-center items-center border-b-2 drop-shadow-xl text-[24px] itim-regular text-[#8d8d8d] border-[#9E9E9E] px-8 p-2 rounded-3xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormFile;
