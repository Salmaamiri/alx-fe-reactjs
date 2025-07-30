import { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      const data = await response.json();
      setUsers(data.items || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <Results users={users} />
    </div>
  );
}

export default App;
