import axios from "../axios";

const prefix = "/HoaDonHangThang";

export const getHoaDonHangThangByUsername = async (username) => {
  const data = await axios.get(`${prefix}/HoaDonsTheoUserName/${username}`);
  return data.data;
};
