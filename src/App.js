import { React, useState } from 'react';
import Card from './components/UI/Card/Card.js'
import UserList from './components/Users/UserList/UserList.js'
import UserInput from './components/Users/UserInput/UserInput.js';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Max",
      age: 31
    },
    {
      id: 2,
      username: "Max",
      age: 31
    },
  ])

  const addUser = (values) => {
    setUsers(prevUsers => {
      const currentUsers = [...prevUsers];
      values.id = currentUsers.length + 1;
      currentUsers.unshift(values);
      return currentUsers;
    })
  }
  const deleteUser = (id) => {
    setUsers(prevUsers => {
      const currentUsers = [...prevUsers];
      return currentUsers.filter(user => user.id !== id);
    })
  }

  let content = (
    <Card className="no-users">
      <p> No users were found! How about you add some?</p>
    </Card>
  )

  if (users.length > 0) content = <UserList users={users} onDeleteUser={deleteUser}></UserList>;
  return (
    <div>
      <UserInput onAdduser={addUser}></UserInput>
      {content}
    </div>
  );
}

export default App;
