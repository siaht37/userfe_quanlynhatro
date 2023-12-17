import axios from "../axios";

const prefixApi = "/TienIch";

export const getAllTienIch = async () => {
  const data = await axios.get(`${prefixApi}/`);
  return data.data;
};
