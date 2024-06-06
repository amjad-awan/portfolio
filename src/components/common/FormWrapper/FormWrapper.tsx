import React from 'react'

const FormWrapper = () => {
  return (
    <form className="flex flex-col h-[100%] ">
    <input
      type="text"
      placeholder="Your Name"
      className="mb-[30px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="mb-[30px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
    />
     <input
      type="tel"
      placeholder="Your Mobile Number"
      className="mb-[30px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
    />
    <textarea
      placeholder="Message"
      className="mb-[30px] h-[142px] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
    />
    <button
      type="submit"
      className=" Button max-w-fit transition-all duration-300 hover:bg-[--black3] hover:text-[var(--color-white)] lowercase inline-flex text-[var(--color-black)] px-[40px] font-[600]  py-[20px] p-2 bg-[var(--color-primary)] "
    >
      Submit Now
    </button>
  </form>
  )
}

export default FormWrapper
