import React from 'react';
import './styles.css';


function DevItem({ user }){

  async function handleDelete(e){
      console.log("evento")
  }
   
return (
  <li   className="user-item">
  <header>
    {/* <img src={user.avatar_url} alt={user.name} /> */}
    <div className="user-info">
      <p className="user-name">{user.name}</p>
      <p className="email">{user.email}</p>
      <p className="email">{user.descricao}</p>
    </div>
  </header>
  {/* <p className="bio">{user.bio}</p>
    <a href={`https://github.com/${user.github_username}`}>Acessar perfil no GitHub</a> */}
    <button className="button btn">Edit</button> 
    <button className="button" onClick={handleDelete}>Delete</button>
  </li>


)}

export default DevItem;