import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSearch({
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
>>>>>>> 7acbc959182bc51ef6186827d6749df5ecf6c1fd
      username,
      location,
      minRepos: minRepos ? parseInt(minRepos) : undefined,
    });
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className="mb-6 space-y-4 max-w-xl mx-auto">
      <div>
        <label className="block text-sm font-medium">Username:</label>
=======
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 max-w-xl mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Username</label>
>>>>>>> 7acbc959182bc51ef6186827d6749df5ecf6c1fd
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
<<<<<<< HEAD
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g. salma"
=======
          placeholder="e.g. johndoe"
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
>>>>>>> 7acbc959182bc51ef6186827d6749df5ecf6c1fd
        />
      </div>

      <div>
<<<<<<< HEAD
        <label className="block text-sm font-medium">Location:</label>
=======
        <label className="block text-sm font-medium text-gray-700">Location</label>
>>>>>>> 7acbc959182bc51ef6186827d6749df5ecf6c1fd
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
<<<<<<< HEAD
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g. Morocco"
=======
          placeholder="e.g. Morocco"
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
>>>>>>> 7acbc959182bc51ef6186827d6749df5ecf6c1fd
        />
      </div>

      <div>
<<<<<<< HEAD
        <label className="block text-sm font-medium">Min Public Repos:</label>
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g. 5"
=======
        <label className="block text-sm font-medium text-gray-700">Min Public Repos</label>
        <input
          type="number"
          min="0"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="e.g. 10"
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
>>>>>>> 7acbc959182bc51ef6186827d6749df5ecf6c1fd
        />
      </div>

      <button
        type="submit"
<<<<<<< HEAD
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
=======
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
>>>>>>> 7acbc959182bc51ef6186827d6749df5ecf6c1fd
      >
        Search
      </button>
    </form>
  );
}

export default Search;
