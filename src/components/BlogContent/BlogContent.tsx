"use client";
import React, { useEffect, useState } from "react";
import img from "../../../public/assets/images/blog1.jpg";
import AnimatedItem from "../common/AnimatedItem/AnimatedItem";
import BlogCategories from "./BlogCategories/BlogCategories";
import BlogTags from "./BlogTags/BlogTags";
import CommentSection from "./CommentSection/CommentSection";
import EmjiPicker from "../common/EmojiPicker/EmojiPicker";
import { FaRegFaceSmile } from "react-icons/fa6";
import { getBlog } from "@/services/blogs";
import Loader from "../common/Loader/Loader";
import DateFormatter from "@/helpers/dateFormatter";
import Reply from "./Reply/Reply";
import { convertToPic } from "@/helpers/picture";
interface BlogType {
  _id: string;
  photoId: string;
  createdAt: string;
  title: string;
  description: string;
  comments: Array<any>;
}
interface FormType {
  comment: string;
  username: string;
  email: string;
}
const BlogContent = ({ params }: { params: { id: string | undefined } }) => {

  const [formData, setFormData] = useState<FormType>({
    username: "",
    email: "amjad@gmail.com",
    // phone: "",
    comment: "",
  });
  const { id } = params;

  const [blog, setBlog] = useState<BlogType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const addLineBreaks = (text: any, wordsPerLine: any) => {
    const words = text?.split(" ");
    let result = [];
    for (let i = 0; i < words?.length; i += wordsPerLine) {
      result.push(words?.slice(i, i + wordsPerLine)?.join(" "));
    }
    return result;
  };

  const getSingleBlog = async () => {
    try {
      const res = await getBlog(id);
      if (res && res.data) {
        setBlog(res.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSingleBlog();
  }, [id]);

  if (isLoading)
    return (
      <div className="mt-[80px]">
        <Loader />
      </div>
    );

  const paragraphs = addLineBreaks(blog?.description, 55);

  return (
    <div className="max-w-[1200px] px-[20px] lg:px-[0px] gap-[15px] mt-[120px] mx-auto grid grid-cols-1 lg:grid-cols-3 ">
      <div className="col-span-2">
        <div className="w-[100%] h-[460px] overflow-hidden">
          <img src={convertToPic(blog?.photoId)} className=" object-cover w-[100%] h-[100%] " />
        </div>
        <div className="flex items-center justify-between gap-[30px] mt-[40px]">
          <div className="flex items-center gap-[30px] ">
            <h3 className="text-[16px] flex flex-col gap-[5px] font-[600] font-primary text-[var(--color-white)]">
              By Insuzu Litarnit
            </h3>
            <span className="capitalize text-[20px] text-[var(--color-black)] font-[400] leading-[1.7] bg-[var(--color-primary)] px-[20px] py-[10px] inline-block">
              Standard
            </span>
          </div>

          <span className="font-[400] text-[var(--body-color)]  text-[14px] ">
            {" "}
            {DateFormatter(blog?.createdAt)}
          </span>
        </div>
        <AnimatedItem
          el="h2"
          cls="text-[40px] mt-[40px] font-primary font-[500] leading-[1.2] text-[var(--color-white)] transition-all translate-y-[20px] duration-500 opacity-0"
        >
          {blog?.title}
          {/* Don’t be beholden to rules in situation. */}
        </AnimatedItem>
        <p className="text-[var(--body-color)] text-justify font-primary font-[400] text-[16px] mt-[32px]">
          {paragraphs.map((paragraph, index) => (
            <span key={index}>
              {paragraph} <br />
              <br />
            </span>
          ))}
        </p>

        <div className="mt-[50px]">
          <BlogTags
            bgColor="transparent"
            padding="0"
            mb="20"
            title="Read this"
          />
        </div>

        <div className="bg-[#e3e3e329] mt-[45px] h-[1px] w-[100%]"></div>

        {blog?.comments?.map((comment, index) => {
          return (
            <div className=" relative bg-[var(--bg-color)] mt-[100px] p-[40px] ">
              <div className="h-[100px] w-[100px] rounded-full overflow-hidden absolute top-[-50px] right-[40px]">
                <img
                  src="/assets/images/1.jpg"
                  className="object-contain h-[100%] w-[100%]"
                />
              </div>
              <div>
                <h3 className="text-[20px]  text-[var(--color-white)] font-[600] font-primary leading-[26px] ">
                  {comment?.username}
                </h3>
                <span className=" uppercase block  text-[12px] mt-[5px] mb-[15px] font-[400] font-primary text-[var(--color-primary)] ">
                  {/* SEPTEMBER 16, 2023 */}
                  {DateFormatter(comment?.date)}
                </span>
              </div>

              <p className=" text-[16px] mb-[50px] font-[400] leading-[1.7] text-[var(--body-color)] ">
                {comment?.comment}
              </p>
              <Reply
                blogId={blog?._id}
                commentId={comment?._id}
                setBlog={setBlog}
                replies={comment?.replies}
              />
            </div>
          );
        })}

        {/* <div className=" relative bg-[var(--bg-color)] mt-[100px] p-[40px] ">
          <div className="h-[100px] w-[100px] rounded-full overflow-hidden absolute top-[-50px] right-[40px]">
            <img
              src="/assets/images/1.jpg"
              className="object-contain h-[100%] w-[100%]"
            />
          </div>
          <div>
            <h3 className="text-[20px]  text-[var(--color-white)] font-[600] font-primary leading-[26px] ">
              Stanio lainto
            </h3>
            <span className=" uppercase block  text-[14px] mt-[5px] mb-[15px] font-[400] font-primary text-[var(--color-primary)] ">
              SEPTEMBER 16, 2023
            </span>
          </div>

          <p className=" text-[16px] font-[400] leading-[1.7] text-[var(--body-color)] ">
            ished fact that a reader will be distrol acted bioii the.ished fact
            that a reader will be distrol acted laoreet Aliquam fact that a
            reader will be distrol .
          </p>
          <span
            onClick={() => setShoReply((prev) => !prev)}
            className="pr-[20px] cursor-pointer uppercase mt-[40px] inline-block text-[var(--body-color)]  text-[14px] mb-[15px] font-[400] font-primary hover:text-[var(--color-primary)] "
          >
            Reply{" "}
          </span>
          {showReply && (
            <form className="  flex flex-col gap-[20px] lg:gap-[12px] mt-[5px] h-[100%]">
              <div className=" relative h-[142px]  text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]">
                <textarea
                  placeholder="Message..."
                  className=" bg-inherit resize-none w-[100%] px-[20px] py-[22px] h-[100%] border-none outline-none "
                ></textarea>
                <FaRegFaceSmile
                  className="text-[var(--color-primary)] cursor-pointer text-[20px] bottom-[12px]  right-[12px] absolute "
                  onClick={() => setPicImojie(!picImojie)}
                />
                <div className="ml-auto bottom-[-20px] top-[108%]  right-[0px] absolute  ">
                  <EmjiPicker picImojie={picImojie} setValue={setValue} />
                </div>
              </div>

              <button
                type="submit"
                className=" Button flex flex-grow w-[100%] transition-all duration-300 hover:bg-[--black3] hover:text-[var(--color-white)]  text-[var(--color-black)] px-[40px] font-[600] py-[20px] p-2 bg-[var(--color-primary)]"
              >
                Send
              </button>
            </form>
          )}
        </div> */}

        <CommentSection
          blogId={blog?._id}
          setBlog={setBlog}
          setFormData={setFormData}
          formData={formData}
        />
      </div>

      <div className=" flex flex-col gap-[15px] col-span-2 lg:col-span-1">
        <BlogCategories />
        <BlogTags bgColor="--bg-color" padding="40" mb="30" title="tags" />
      </div>
    </div>
  );
};

export default BlogContent;
