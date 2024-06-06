"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import AnimatedItem from "../common/AnimatedItem/AnimatedItem";
import FormWrapper from "../common/FormWrapper/FormWrapper";

interface FormField {
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
  name: keyof FormData;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const formFields: FormField[] = [
  {
    type: "text",
    placeholder: "Your Name",
    name: "name",
  },
  {
    type: "email",
    placeholder: "Your Email",
    name: "email",
  },
  {
    type: "tel",
    placeholder: "Your Mobile Number",
    name: "phone",
  },
  {
    type: "textarea",
    placeholder: "Message",
    name: "message",
  },
];

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to handle form submission, like sending data to a server
  };

  return (
    <div className="p-[30px] lg:p-[60px] bg-[var(--bg-color)]">
      <AnimatedItem
        el="h2"
        cls="transition-all opacity-0 duration-1000 translate-y-[20px]  text-[40px] font-primary font-[500] text-[var(--color-white)] mb-4"
      >
        GET IN TOUCH?
      </AnimatedItem>

      <p className="mb-[30px] font-primary text-[var(--body-color)] leading-[1.7] text-[16px] font-[400]">
        Ready to take your project to the next level? Let's collaborate and
        build something amazing together! Reach out and let's get started on
        turning your vision into reality.
      </p>

       <FormWrapper/>

      {/* <form className="flex flex-col h-[100%]" onSubmit={handleSubmit}>
        {formFields.map((field, index) => {
          const commonProps = {
            key: index,
            name: field.name,
            value: formData[field.name],
            placeholder: field.placeholder,
            onChange: handleChange,
            className:
              "mb-[30px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]",
          };

          return field.type === "textarea" ? (
            <textarea
              {...(commonProps as any)}
              key={index}
              className="mb-[30px] h-[142px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
            />
          ) : (
            <input {...commonProps} key={index} type={field.type} />
          );
        })}
        <button
          type="submit"
          className=" Button max-w-fit transition-all duration-300 hover:bg-[--black3] hover:text-[var(--color-white)] lowercase inline-flex text-[var(--color-black)] px-[40px] font-[600] py-[20px] p-2 bg-[var(--color-primary)]"
        >
          Submit Now
        </button>
      </form> */}
    </div>
  );
};

export default Form;
