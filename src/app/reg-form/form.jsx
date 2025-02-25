"use client";
import axios from "axios";
import React, { useState } from "react";

function FormFile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");
  const [instituteId, setInstituteId] = useState("");
  const [instituteName, setInstituteName  ] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!name || !email || !number) {
        alert("Please fill out all required fields!");
        return;
      }
  
      if (number === alternateNumber) {
        alert("Primary and alternate numbers should be different.");
        return;
      }
  
      const form ={
        name,
        email,
        number,
        alternateNumber,
        instituteId,
        instituteName
      }
      console.log(form)

      const res = await axios.post('/api/submit',form)

      if (res.status === 200) {
        alert("Form submitted successfully!");
        setName("");
        setEmail("");
        setNumber("");
        setAlternateNumber("");
        setInstituteId("");
        setInstituteName("");
      } else {
        alert("Form submission failed.");
      }

      
    } catch (error) {
      console.log("Error while submitting the form")
      
    }
  };

  return (
    <div>
      <form
       
        className="flex w-full h-fit lg:py-8 py-0 flex-col"
        
        onSubmit={handleSubmit}
      >
        <div className="flex w-full items-center flex-col gap-8 py-10">
          <input
            name="name"
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E] "
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            name="email"
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E] "
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            name="number"
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E]
        [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Mobile Number"
            type="tel"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <input
            name="alternate number"
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E] 
        [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Alternate Mobile Number"
            type="tel"
            value={alternateNumber}
            onChange={(e) => {
              setAlternateNumber(e.target.value);
            }}
          />
          <input
            name="institute id"
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E] 
        [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Institute Id"
            type="tel"
            value={instituteId}
            onChange={(e) => {
              setInstituteId(e.target.value);
            }}
          />
          <input
            name="Institute Name"
            className="flex w-[80%] rounded-3xl drop-shadow-xl py-2 text-start px-5 itim-regular border-b-2 placeholder:opacity-60 border-[#9E9E9E] text-[24px] outline-0 focus:border-2 focus:border-[#9E9E9E] 
        [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Institute Name"
            type="tel"
            value={instituteName}
            onChange={(e) => {
              setInstituteName(e.target.value);
            }}
          />
        </div>
        
        <div className="flex py-5 lg:py-10 justify-center">
          <button type="submit" className="flex w-[60%] justify-center items-center border-b-2 drop-shadow-xl text-[24px] itim-regular text-[#8d8d8d] border-[#9E9E9E] px-8 p-2 rounded-3xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormFile;
