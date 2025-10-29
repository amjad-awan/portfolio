"use client";

import React, { useEffect, useState } from "react";
import AnimatedItem from "../common/AnimatedItem/AnimatedItem";
import SectionsHead from "../SectionsHead/SectionsHead";
import Link from "next/link";
import { useRouter } from 'next/navigation'

import { FaCircleUser } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import styles from "./style.module.scss";
import { getBlogs } from "@/services/blogs";
import Loader from "../common/Loader/Loader";
import { convertToPic } from "@/helpers/picture";
import DateFormatter from "@/helpers/dateFormatter";
interface BlogProps {
  _id: string;
  photoId: string;
  createdAt: string;
  title: string;
  comments: Array<any>;
}
const MyBlogs = ({ button }: any) => {
  const router= useRouter()
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const allBlogs = async () => {
    try {
      const res = await getBlogs();
      if (res && res.data) {
        setBlogs(res.data);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    allBlogs();
  }, []);

  return (
    <div id="blogs" className="max-w-[1200px] mb-[200px] pt-[100px] px-[20px] lg:px-[0px] mx-auto ">
      <div className="flex gap-[40px] flex-col md:flex-row items-end ">
        <div className="max-w-[800px]">
          <SectionsHead
            lablePosition="left"
            lableText="MY BLOG"
            hPosition="left"
            h="Unlocking the potential of your
        personal brand"
          />
        </div>
      
        {button && (
           <button onClick={()=>router.push("/blogs")}
            // type="button"
            className="  md:ml-auto Button w-[200px] transition-all duration-300 hover:bg-[--black3] hover:text-[var(--color-white)] text-[14px] inline-flex  text-[var(--color-black)] px-[20px] font-[600] py-[15px]  bg-[var(--color-primary)]"
          >
            More Blog +
          </button>
         
        )}
      </div>

      {isLoading && (
        <div className="my-[80px]">
          <Loader />
        </div>
      )}

      <div className="grid grid-cols-1 gap-y-[130px] gap-x-[20px]  md:grid-cols-2 lg:grid-cols-3 mt-[20px] md:mt-[40px] ">
        {blogs.map((blog) => {
          return (
            <AnimatedItem
              el="div"
              cls={`${styles["__blog-card"]} w-[100%] h-[380px] md:mt-[5px] bg-[var(--body-color)]`}
            >
              <Link href={`blog/${blog._id}`} className="h-[300px] w-[100%]">
                <>
                  <div className="h-[100%] w-[100%] overflow-hidden">
                    <img
                      src={convertToPic(blog.photoId)}
                      alt={blog.title}
                      className="w-[100%] h-[100%] object-cover "
                    />
                  </div>

                  <div className="relative w-[90%] left-[50%] translate-x-[-50%]  z-[999] top-[-76px]  bg-[var(--bg-color)] p-[30px] ">
                    <div className=" text-center absolute left-[50%] translate-x-[-50%] inline-block top-[-15px] text-[var(--color-white)] text-[16px] font-[500] bg-[var(--color-primary)] w-[200px] px-[17px] py-[13px] ">
                      {/* 31 December,2022 */}
                      {DateFormatter(blog?.createdAt)}
                      {/* {blog.createdAt} */}
                    </div>

                    <ul className=" mt-[15px] mb-[10px] flex justify-between gap-[20px] ">
                      <li className="flex text-[.9rem] font-primary text-[var(--color-white)] items-center gap-[10px] ">
                        <FaCircleUser className="text-[var(--color-primary)]" />
                        By admin
                      </li>
                      <li className="flex text-[.9rem] font-primary text-[var(--color-white)] items-center gap-[10px] ">
                        <FaComments className="text-[var(--color-primary)]" />
                        Comments ({blog.comments.length})
                      </li>
                    </ul>

                    <h6 className="text-[20px] mt-[5px] transition-all duration-500 text-center font-[600] font-primary block text-[var(--color-white)] hover:text-[var(--color-primary)] ">
                      {" "}
                      {blog.title}
                    </h6>
                  </div>
                </>
              </Link>
            </AnimatedItem>
          )
        })}
      </div>
    </div>
  );
};

export default MyBlogs;
