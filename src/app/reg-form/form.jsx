"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

function FormFile({topic}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");
  const [instituteId, setInstituteId] = useState("");
  const [instituteName, setInstituteName  ] = useState("");
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [paymentProof, setPaymentProof] = useState(null);

  const router = useRouter();
  

  const handlePaymentClick = () => {
    setShowImageUpload(true); 
  };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPaymentProof(file);
      setPaymentStatus(true);
      alert("Payment proof uploaded successfully!");
    } else {
      alert("Please upload a valid image file.");
      setPaymentProof(null);
      setPaymentStatus(false);
    }
  };

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
  
      if (!paymentStatus) {
        alert("Please upload payment proof before submitting.");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("number", number);
      formData.append("alternateNumber", alternateNumber);
      formData.append("instituteId", instituteId);
      formData.append("instituteName", instituteName);
      formData.append("paymentProof", paymentProof);

      const res = await axios.post(`/api/submit/${topic}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200) {
        alert("Form submitted successfully!");
        setName("");
        setEmail("");
        setNumber("");
        setAlternateNumber("");
        setInstituteId("");
        setInstituteName("");
        setPaymentProof(null);
        setPaymentStatus(false);
        setShowImageUpload(false);
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
        
        <div className="flex py-5 lg:py-10 justify-center gap-8">
        <div className="flex py-5 lg:py-10 justify-center gap-8">

        {showImageUpload && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="flex w-[80%] rounded-3xl border-2 border-dashed border-[#9E9E9E] py-3 px-5 text-center text-[20px] cursor-pointer"
            />
          )}
        
  {!showImageUpload && (
    <button
      type="button"
      onClick={handlePaymentClick}
      className="flex w-[20%] justify-center items-center border-b-2 drop-shadow-xl text-[24px] itim-regular text-white bg-blue-500 border-[#9E9E9E] px-8 p-2 rounded-3xl"
    >
      Pay
    </button>
  )}

  {paymentStatus && (
    <button
      type="submit"
      className="flex w-[20%] justify-center items-center border-b-2 drop-shadow-xl text-[24px] itim-regular text-white bg-green-500 border-[#9E9E9E] px-8 p-2 rounded-3xl"
    >
      Submit
    </button>
  )}
</div>

          
        </div>
      </form>
    </div>
  );
}

export default FormFile;
