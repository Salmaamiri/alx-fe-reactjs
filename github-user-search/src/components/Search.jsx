import { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username.trim()) return;

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      const data = await response.json();
      setUsers(data.items || []);
    } catch (err) {
      setError("Something went wrong while fetching users.");
      setUsers([]);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Search GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {/* Rendering results using && and map */}
      {users.length > 0 && (
        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id} className="flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
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
