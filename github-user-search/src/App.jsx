// src/App.jsx
import { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import { searchGithubUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (criteria) => {
    try {
      const results = await searchGithubUsers(criteria);
      setUsers(results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <Results users={users} />
    </div>
  );
}

export default App;
