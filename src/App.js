
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (

    <div className="App">
      <h1>my own data {users.length}</h1>
      <ul>
        {

          users.map(user => <li key={user.id}> Name:{user.name} Email:{user.name} Phone:{user.phone}</li>)

        }

      </ul>

    </div>
  );
}

export default App;
