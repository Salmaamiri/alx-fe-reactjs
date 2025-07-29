// src/components/Search.jsx
import React, { useState } from "react";

// This function calls the GitHub API search endpoint with query params
async function searchUsers({ username, location, minRepos, page = 1 }) {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=30`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch users");
  const data = await response.json();
  return data;
}

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [criteria, setCriteria] = useState(null);

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPage(1);
    const searchCriteria = { username, location, minRepos };
    setCriteria(searchCriteria);

    try {
      const data = await searchUsers({ ...searchCriteria, page: 1 });
      setResults(data.items || []);
    } catch (error) {
      alert(error.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Load more results (next page)
  const loadMore = async () => {
    if (!criteria) return;
    setLoading(true);
    const nextPage = page + 1;
    try {
      const data = await searchUsers({ ...criteria, page: nextPage });
      setResults((prev) => [...prev, ...(data.items || [])]);
      setPage(nextPage);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded shadow-md">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="username" className="block font-semibold mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block font-semibold mb-1">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Filter by location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block font-semibold mb-1">
            Minimum Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            min="0"
            placeholder="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Results */}
      <ul className="mt-6 space-y-4">
        {results.map((user) => (
          <li key={user.id} className="flex items-center space-x-4 p-3 bg-white rounded shadow-sm">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              {user.login}
            </a>
          </li>
        ))}
      </ul>

      {/* Load More Button */}
      {results.length > 0 && !loading && (
        <button
          onClick={loadMore}
          className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Load More
        </button>
      )}

      {loading && results.length > 0 && <p className="mt-4 text-center">Loading more...</p>}
    </div>
  );
}
