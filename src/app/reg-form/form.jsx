"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

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
        router.push('/Lecture');
      } else {
        alert("Form submission failed.");
      }

      
    } catch (error) {
      console.log("Error while submitting the form")
      
    }
  };

  return (
    <div className="w-full flex justify-center">
    <form
      className="flex w-full max-w-md flex-col p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 w-full">
        <input
          name="name"
          className="w-full rounded-lg py-2 px-4 text-base border placeholder:opacity-60 border-gray-300 focus:border-2 focus:border-gray-500 outline-none"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          className="w-full rounded-lg py-2 px-4 text-base border placeholder:opacity-60 border-gray-300 focus:border-2 focus:border-gray-500 outline-none"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="number"
          className="w-full rounded-lg py-2 px-4 text-base border placeholder:opacity-60 border-gray-300 focus:border-2 focus:border-gray-500 outline-none"
          placeholder="Mobile Number"
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          name="alternate number"
          className="w-full rounded-lg py-2 px-4 text-base border placeholder:opacity-60 border-gray-300 focus:border-2 focus:border-gray-500 outline-none"
          placeholder="Alternate Mobile Number"
         type="tel"
          value={alternateNumber}
          onChange={(e) => setAlternateNumber(e.target.value)}
        />
        <input
          name="institute id"
          className="w-full rounded-lg py-2 px-4 text-base border placeholder:opacity-60 border-gray-300 focus:border-2 focus:border-gray-500 outline-none"
          placeholder="Institute Id"
          type="tel"
          value={instituteId}
          onChange={(e) => setInstituteId(e.target.value)}
        /> <input
          name="Institute Name"
          className="w-full rounded-lg py-2 px-4 text-base border placeholder:opacity-60 border-gray-300 focus:border-2 focus:border-gray-500 outline-none"
          placeholder="Institute Name"
          type="tel"
          value={instituteName}
          onChange={(e) => setInstituteName(e.target.value)}
        />
       </div>

 <div className="flex flex-col items-center gap-4 mt-6">
        
        
        {showImageUpload && (
          <div className="flex flex-col items-center gap-4 w-full">
            <Image
              src="./QR.jpg"
              width={200}
        height={200}
        alt="QR Code"
        unoptimized
         />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full rounded-lg border-2 border-dashed border-gray-300 py-2 px-4 text-center text-base cursor-pointer"
            />
          </div>
        )}

        {!showImageUpload && (
          <button
            type="button"
            onClick={handlePaymentClick}
            className="w-full max-w-xs py-2 px-4 text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Pay
          </button>
        )}

        
        {paymentStatus && (
        
        <button
            type="submit"
            className="w-full max-w-xs py-2 px-4 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
           >
          Submit
       </button>
          )}
  </div>
</form>
  </div>
  );
}

export default FormFile;
