function Results({ users }) {
  if (!users.length) {
    return <p className="text-center text-gray-500">No users found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-xl mx-auto">
      {users.map(user => (
        <div key={user.id} className="p-4 border rounded shadow">
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto" />
            <h3 className="text-center mt-2 font-semibold">{user.login}</h3>
          </a>
          {/* Optional: Add more info like location or repos count if you fetch it */}
        </div>
      ))}
    </div>
  );
}

export default Results;
