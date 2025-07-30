function Results({ users }) {
  if (!users.length) {
    return <p className="text-center text-gray-500">No users found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {users.map(user => (
        <div
          key={user.id}
          className="border rounded p-4 flex flex-col items-center bg-white shadow"
        >
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mb-3"
            />
            <h3 className="text-lg font-semibold text-center">{user.login}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Results;
