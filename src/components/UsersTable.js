import React, { useState, useEffect } from "react";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const nextUser = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevUser = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (users.length === 0) return <p>Loading...</p>;

  const user = users[currentIndex];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Detail</h2>
      <table border="1" style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Username</th>
            <th>Email</th>
            <th>Kota</th>
            <th>Perusahaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.company.name}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevUser} disabled={currentIndex === 0}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          {currentIndex + 1} / {users.length}
        </span>
        <button
          onClick={nextUser}
          disabled={currentIndex === users.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
