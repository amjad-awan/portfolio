"use client";
import EmjiPicker from "@/components/common/EmojiPicker/EmojiPicker";
import { addReply } from "@/services/blogs";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaRegFaceSmile } from "react-icons/fa6";
import { toast } from "react-toastify";
interface FormType {
  comment: string;
  username: string;
}
const Reply = ({ blogId, replies, commentId, setBlog }: any) => {
  const [showReply, setShoReply] = useState(false);
  const [picImojie, setPicImojie] = useState(false);
  const [value, setValue] = useState("");
  const emojiPickerRef = useRef<any>(null);
  const [replyData, setReplyData] = useState<FormType>({
    username: "amjad@gmail.com",
    // phone: "",
    comment: "",
  });

  console.log("replyData", replyData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReplyData({
      ...replyData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!replyData.comment) {
      toast.error("Oops, field must be filled");
      return;
    }

    try {
      console.log("replyData", replyData);
      const res = await addReply({ ...replyData, blogId: blogId, commentId });
      if (res && res.success) {
        setBlog((prev: any) => {
          if (prev) {
            const updatedComments = prev.comments.map((comment: any) => {
              if (comment._id === commentId) {
                return {
                  ...comment,
                  replies: [...comment.replies, res.reply],
                };
              }
              return comment;
            });
            return { ...prev, comments: updatedComments };
          }
          return null;
        });
        toast.success("Reply is added");
        setReplyData({
          username: "amjad@gmail.com",
          // phone: "",
          comment: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong");
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
    <>
      {replies?.map((reply, index) => {
        return (
          <div className=" relative ml-[30px] mb-[50px] px-[10px] py-[20px] bg-[#151c25]">
            <div className="absolute text-center uppercase leading-[30px] text-[#fff] top-[-15px] right-2 w-[50px] border-[1px] border-[#dbd9d97c] h-[30px] rounded-full bg-[#151c25] ">{reply.username.charAt(0)}</div>
            <p className="text-[#fff] text-[16px]">{reply.comment}</p>
          </div>
        );
      })}
      <span
        onClick={() => setShoReply((prev) => !prev)}
        className="pr-[20px] cursor-pointer uppercase mt-[40px] inline-block text-[var(--body-color)]  text-[14px] mb-[15px] font-[400] font-primary hover:text-[var(--color-primary)] "
      >
        Reply{" "}
      </span>
      {showReply && (
        <form
          onSubmit={handleSubmit}
          className="  flex flex-col gap-[20px] lg:gap-[12px] mt-[5px] h-[100%]"
        >
          <div className=" relative h-[142px]  text-[var(--color-white)] outline-none bg-transparent border-[1px] border-[var(--color-primary)]">
            <textarea
              value={replyData.comment}
              name="comment"
              onChange={handleChange}
              placeholder="Message..."
              className=" bg-inherit resize-none w-[100%] px-[20px] py-[22px] h-[100%] border-none outline-none "
            ></textarea>
            <FaRegFaceSmile
              className="text-[var(--color-primary)] cursor-pointer text-[20px] bottom-[12px]  right-[12px] absolute "
              onClick={() => setPicImojie(!picImojie)}
            />
            <div
              className="ml-auto bottom-[-20px] z-[9999] top-[108%]  right-[0px] absolute  "
              ref={emojiPickerRef}
            >
              <EmjiPicker
                picImojie={picImojie}
                setValue={setValue}
                setFormData={setReplyData}
                formData={replyData}
                // Data={setReplyData}
              />
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
    </>
  );
};

export default Reply;
