import axios from "../axios";

export const getAllSoNuoc = async () => {
  const data = await axios.get("/SoNuoc/");
  return data.data;
};
