import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = [];
    if (!username.trim()) {
      validationErrors.push("Username is required");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors([]);
    }

    await onSearch({
      username,
      location,
      minRepos: minRepos ? parseInt(minRepos) : undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4 max-w-xl mx-auto">
      {/* Conditionally show errors if any */}
      {errors.length > 0 && (
        <ul className="text-red-600 mb-4">
          {errors.map((error, index) => (
            <li key={index}>• {error}</li>
          ))}
        </ul>
      )}

      <div>
        <label className="block text-sm font-medium">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g. salma"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g. Morocco"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Min Public Repos:</label>
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g. 5"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
