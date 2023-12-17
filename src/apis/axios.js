import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_QUAN_LY_NHA_TRO,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
