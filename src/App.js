
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  // console.log(users);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleAddUsers = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };


    //post data to server

    fetch('http://localhost:5000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers);
      })
  }
  return (

    <div className="App">
      <h1>my own data {users.length}</h1>
      <form onSubmit={handleAddUsers}>
        <input type="text" name="name" id="name" placeholder='enter your name' />
        <input type="text" name="email" id="email" placeholder='enter your email' />
        <input type="submit" value="Add user" />
      </form>
      <ul>
        {

          users.map(user => <li key={user.id}>Id: {user.id} Name:{user.name} Email:{user.name} Phone:{user.phone}</li>)

        }

      </ul>

    </div>
  );
}

export default App;
