import React, { useState } from 'react'
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {
  const [users, setUsers] = useState([
    {id: 1, username: 'Andre', age: '28'},
    {id: 2, username: 'Smith', age: '30'}
  ])

  const addUserHandler = (enteredUsername, enteredAge) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      // updatedUsers.unshift({id: Math.random().toString(), username: enteredUsername, age: enteredAge})
      // return updatedUsers;

      return [...prevUsers, {id: Math.random().toString(), username: enteredUsername, age: enteredAge}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList items={users} />
    </div>
  );
}

export default App;
