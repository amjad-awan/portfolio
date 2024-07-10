import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const sendRequest = async (payload:any) => {
  let response;
  const { endpoint, method = 'GET', data = null, headers = {} } = payload;
  try {
    // Set default headers
    const defaultHeaders = {
      'Content-Type': 'application/json'
    };
    const mergedHeaders = {
      ...defaultHeaders,
      ...headers
    };

    const requestOptions = {
      method,
      headers: mergedHeaders,
      data: data ? JSON.stringify(data) : null,
      url: `${BASE_URL}/${endpoint}`
    };
   const res = await axios(requestOptions);
    response = res.data;
    return response
  } catch (error) {
response = error;
  }

  return response;
};
