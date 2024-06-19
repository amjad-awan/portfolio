"use client";
import { useAuth } from "@/context/authContext";
import { sendMail } from "@/services/mailSender";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FormWrapper = () => {
 const {user}= useAuth()
  const [formData, setFormData] = useState({
    message: "",
    phone: "",
    email: "",
    name: "",
  });
  console.log("formData15", formData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(!user)
      {
        toast.error("You must be login first");
        return
      }

    if (
      !(formData.message && formData.phone && formData.email && formData.name)
    ) {
      toast.error("Oops!, all fields are required");
      console.log("error");
      return;
    }
    try {
      const res = await sendMail(formData);
      if (res && res.success){
        toast.success("Form is submitted successfully");
        setFormData({
          message: "",
          phone: "",
          email: "",
          name: "",
        });
      }
    } catch (error) {}
  };


  useEffect(()=>{
    setFormData({
      ...formData,
      email:user?user.email:""
    })
  },[user?.email])


  return (
    <form className="flex flex-col h-[100%] " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        name="name"
        onChange={handleChange}
        className="mb-[30px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
      />
      <input
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={formData.email}
        name="email"
        className="mb-[30px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
      />
      <input
        type="tel"
        onChange={handleChange}
        value={formData.phone}
        name="phone"
        placeholder="Your Mobile Number"
        className="mb-[30px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
      />
      <textarea
        placeholder="Message"
        onChange={handleChange}
        value={formData.message}
        name="message"
        className="mb-[30px] h-[142px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
      />
      <button
        type="submit"
        className=" Button max-w-fit transition-all duration-300 hover:bg-[--black3] hover:text-[var(--color-white)] lowercase inline-flex text-[var(--color-black)] px-[40px] font-[600]  py-[20px] p-2 bg-[var(--color-primary)] "
      >
        Submit Now
      </button>
    </form>
  );
};

export default FormWrapper;
