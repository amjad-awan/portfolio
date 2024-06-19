import { sendRequest } from "./sendRequest";

export const sendMail = async (content: any) => {
  const res = await sendRequest({
    endpoint: `send-mail`,
    data: content,
    method: "POST",
  });
  return res;
};
