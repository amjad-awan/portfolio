"use client";

import AnimatedItem from "@/components/common/AnimatedItem/AnimatedItem";
import EmjiPicker from "@/components/common/EmojiPicker/EmojiPicker";
import { addComment } from "@/services/blogs";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
} from "react";
import { FaRegFaceSmile } from "react-icons/fa6";
import { toast } from "react-toastify";

interface FormField {
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
  username: keyof FormData;
}

interface FormData {
  username: string;
  email: string;
  comment: string;
}

const formFields: FormField[] = [
  {
    type: "text",
    placeholder: "Your Name",
    username: "username",
  },
  {
    type: "email",
    placeholder: "Your Email",
    username: "email",
  },

  {
    type: "textarea",
    placeholder: "Message",
    username: "comment",
  },
];

const CommentSection = ({ blogId, setBlog, setFormData, formData }: any) => {
  const emojiPickerRef = useRef<any>(null);

  const [showReply, setShoReply] = useState(false);
  const [picImojie, setPicImojie] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!(formData.comment || formData.username)) {
      toast.error(" Oops, both fields must be filled ");
      return;
    }

    try {
      const res = await addComment({ ...formData, blogId: blogId });
      if (res && res.success) {
        setBlog((prev: any) =>
          prev ? { ...prev, comments: [...prev.comments, res.comment] } : null
        );
        toast.success("comment is added");
      }
    } catch (error) {
      toast.error("somehting went wronge");
    }
  };

  const handleClickOutside = (event: any) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target)
    ) {
      setPicImojie(false);
    }
  };
  useEffect(() => {
    if (picImojie) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [picImojie]);

  return (
    <div className=" mt-[80px]">
      <AnimatedItem
        el="h2"
        cls="transition-all opacity-0 duration-1000 translate-y-[20px]  text-[40px] uppercase font-primary font-[900] text-[var(--color-white)] mb-4"
      >
        LEAVE A COMMENT
      </AnimatedItem>

      <form
        className="flex flex-col gap-[20px] lg:gap-[25px] mt-[25px] h-[100%]"
        onSubmit={handleSubmit}
      >
        <div className=" flex  flex-col md:flex-row  gap-y-[20px] gap-x-[15px] ">
          <input
            onChange={handleChange}
            value={formData.username}
            name="username"
            placeholder="Enter your name"
            className="w-[100%] px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
          />
          {/* <input
            placeholder="Enter your email"
            className=" w-[100%]  px-[20px] py-[22px] text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]"
          /> */}
        </div>
        <div className=" relative h-[142px]  text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]">
          <textarea
            onChange={handleChange}
            value={formData.comment}
            name="comment"
            placeholder="write here..."
            className=" bg-inherit resize-none w-[100%] px-[20px] py-[22px] h-[100%] border-none outline-none "
          ></textarea>
          <FaRegFaceSmile
            className="text-[var(--color-primary)] cursor-pointer text-[20px] bottom-[12px]  right-[12px] absolute "
            onClick={() => setPicImojie(!picImojie)}
          />

          <div
            className="ml-auto z-[999] bottom-[-20px] top-[108%] right-[0px] absolute"
            ref={emojiPickerRef}
          >
            <EmjiPicker
              picImojie={picImojie}
              setValue={setValue}
              setFormData={setFormData}
              formData={formData}
            />
          </div>
        </div>
        <button
          type="submit"
          className="  Button flex flex-grow w-[100%] transition-all duration-300 hover:bg-[--black3] hover:text-[var(--color-white)]  text-[var(--color-black)] px-[40px] font-[600] py-[20px] p-2 bg-[var(--color-primary)]"
        >
          Post comment now{" "}
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
