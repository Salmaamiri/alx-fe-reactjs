function Results({ users }) {
  if (!users.length) {
    return <p className="text-center text-gray-500">No users found.</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map((user) => (
        <li key={user.id} className="bg-white p-4 shadow rounded text-center">
          <img src={user.avatar_url} alt={user.login} className="w-20 h-20 mx-auto rounded-full mb-2" />
          <h2 className="text-lg font-semibold">{user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            View Profile
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Results;
