import axios from "axios";

const API = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchUserData = async (username) => {
  const response = await API.get(`/users/${username}`);
  return response.data;
};
