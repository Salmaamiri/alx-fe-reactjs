export async function searchGithubUsers({ username, location, minRepos }) {
  // Build search query string
  let query = username || "";

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  
  if (!response.ok) {
    throw new Error("GitHub API error");
  }

  const data = await response.json();
  return data.items;
}

