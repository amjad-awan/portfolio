import { sendRequest } from "./sendRequest"


export const getBlogs =async()=>{
    const res = await sendRequest({
        endpoint:`blog/get-blogs`,
      });
      return res;
}

export const getBlog =async(id:string)=>{

    const res = await sendRequest({
        endpoint:`blog/get-blog/${id}`,
      });

      return res;
}

export const addComment =async(commentData:any)=>{

    const res = await sendRequest({
        endpoint:`blog/comment`,
        data:commentData,
        method:"POST"
      });

      return res;
}

export const addReply =async(replyData:any)=>{

  const res = await sendRequest({
      endpoint:`blog/reply`,
      data:replyData,
      method:"POST"
    });

    return res;
}

