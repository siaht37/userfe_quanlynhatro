import axios from "../axios";

const prefix = "/PhieuThueTienIch";

export const getAllPhieuThueTienIch = async () => {
  const data = await axios.get(`${prefix}/`);
  return data.data;
};
