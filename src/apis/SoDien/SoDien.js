import axios from "../axios";

export const getAllSoDien = async () => {
  const data = await axios.get("/SoDien/");
  return data.data;
};
