import React, { useState, useEffect } from 'react';
import api from './services/api';

import './Style.css';
import './App.css';
import './SideBar.css';
import './Main.css';


import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


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
      console.log(users);
    
      setUsers([...users, response.data]);
     
    };

  return (
    <div id='app'>
    <aside>
      <DevForm onSubmit={handleAddDev} />
    </aside>
    <main>
      <ul>
        {users.map(user => (
          <DevItem key={user.email} user={user}/>
        ))}  
      </ul>
    </main>
    </div>
  );
}

export default App;
