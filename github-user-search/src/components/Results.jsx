const Results = ({ users }) => {
  if (users.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {users.map((user) => (
        <div key={user.id} className="bg-gray-100 p-4 rounded-lg shadow">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <h2 className="text-lg font-bold mt-2">{user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default Results;
