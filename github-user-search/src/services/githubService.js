// src/services/githubService.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
});

export const fetchUserData = async (username) => {
  const response = await API.get(`/users/${username}`);
  return response.data;
};
