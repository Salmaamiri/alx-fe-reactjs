import axios from 'axios';

export async function searchGithubUsers({ username, location, minRepos }) {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos !== undefined) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url);

  // Return the items array (users) or an empty array if none found
  return response.data.items || [];
}
