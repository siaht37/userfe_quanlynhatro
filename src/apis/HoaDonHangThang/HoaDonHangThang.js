import axios from "../axios";

const prefix = "/HoaDonHangThang";

export const getHoaDonHangThangByUsername = async (username) => {
  const data = await axios.get(`${prefix}/HoaDonsTheoUserName/${username}`);
  return data.data;
};

export const getHoaDonByMaHoaDon = async (maHoaDon) => {
  const data = await axios.get(`${prefix}/chiTietHoaDon/${maHoaDon}`);
  return data.data;
};

export const postData = async (data) => {
  
}
