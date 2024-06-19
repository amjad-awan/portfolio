import { sendRequest } from "./sendRequest"


export const getProjects =async(limit:number)=>{
    const res = await sendRequest({
        endpoint:`project/get-projoct?limit=${limit}`,
      });
      return res;
}

export const getProject =async(id:string)=>{

    const res = await sendRequest({
        endpoint:`project/get-single-project/${id}`,
      });

      return res;
}