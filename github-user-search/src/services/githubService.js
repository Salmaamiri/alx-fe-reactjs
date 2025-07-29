export async function searchGithubUsers(username) {
  const response = await fetch(`https://api.github.com/search/users?q=${username}`);
  if (!response.ok) {
    throw new Error("GitHub API error");
  }
  const data = await response.json();
  return data.items;
}
