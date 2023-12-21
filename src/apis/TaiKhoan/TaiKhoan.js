import axios from "../axios";

export const login = async (username, password) => {
  const data = await axios.post(`${process.env.REACT_APP_QUAN_LY_NHA_TRO}/api/auth/login`, {
    usernameOrEmail: username,
    password: password,
  });
  return data.data;
};
