import axios from "../axios";

export const getAllRoom = async () => {
  const response = await axios.get("/Phong/");
  return response.data;
};
