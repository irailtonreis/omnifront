import React, { useState, useEffect } from 'react';
import api from './services/api';

import './Style.css';
import './App.css';
import './SideBar.css';
import './Main.css';


import UserItem from './components/UserItem';
import UserForm from './components/UserForm';


function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      async function loadUsers(){
     
        const response = await api.get('/users');
        
        setUsers(response.data);

      } 
      loadUsers();
    },[]);

    async function handleAddDev(data){
      const response = await api.post('/users', data);
      console.log(response.data);
    
      setUsers([...users, response.data]);
    };

    async function deleteUser(_id){
      const response = await api.delete(`/users/${_id}`);

     const result =  users.filter(user => {
        return user._id !== _id;
      })
      setUsers([result]);

      console.log(result);
    }

  return (
    <div id='app'>
    <aside>
      <UserForm onSubmit={handleAddDev} />
    </aside>
    <main>
      <ul>
        {users.map(user => (
          <UserItem key={user._id} user={user} deleteUser={deleteUser}/>
        ))}  
      </ul>
    </main>
    </div>
  );
}

export default App;
