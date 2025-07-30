// src/services/githubApi.js
import axios from "axios";

// Create a reusable axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
  headers: {
    // If using a GitHub token, uncomment the line below:
    // Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

// Function to get a GitHub user by username
export const fetchGitHubUser = async (username) => {
  const response = await API.get(`/users/${username}`);
  return response.data;
};
