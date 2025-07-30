import { useState } from "react";

async function fetchUserData(username) {
  const response = await fetch(`https://api.github.com/search/users?q=${username}`);
  const data = await response.json();

  const usersWithDetails = await Promise.all(
    data.items.map(async (user) => {
      const res = await fetch(user.url);
      const details = await res.json();
      return {
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        location: details.location || "Not specified",
      };
    })
  );

  return usersWithDetails;
}

function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const result = await fetchUserData(username);
      setUsers(result);
    } catch (err) {
      setError("Failed to fetch users.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter GitHub username"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {users.length > 0 && (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.login} className="border p-4 rounded flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{user.login}</p>
                <p className="text-sm text-gray-600">Location: {user.location}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
