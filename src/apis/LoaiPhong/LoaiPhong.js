import axios from "../axios";

export const getAllLoaiPhong = async () => {
  const data = await axios.get("/LoaiPhong/");
  return data.data;
};
