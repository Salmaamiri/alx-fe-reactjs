const Results = ({ users }) => {
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul className="results-list">
      {users.map((user) => (
        <li key={user.id} className="user-card">
          <img src={user.avatar_url} alt={user.login} width={50} />
          <div>
            <p>{user.login}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Results;
