import React, { useEffect, useState } from "react";

function UserData() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="container">
      <h1 className="title">User Details</h1>

      <div>
        {user.map((details) => (
          <div key={details.id}>
            <p>Name: {details.name}</p>
            <p>Email: {details.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserData;
