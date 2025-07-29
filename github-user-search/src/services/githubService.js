const BASE_URL = "https://api.github.com/search/users";

export async function searchUsers({ username, location, minRepos, page = 1 }) {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=30`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
