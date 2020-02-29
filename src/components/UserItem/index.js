import React from 'react';
import './styles.css';


function UserItem({ user, deleteUser }){

  // async function handleDelete(e){
  //     console.log("evento")
  // }
   
return (
  <li className="user-item">
  <header>
    <img src="" alt="" />
    <div className="user-info">
      <strong>Nome: {user.nome}</strong>
      <p>Email:{user.email}</p>
      <p className="email">Descricap{user.descricao}</p>
    </div>
  </header>
  {/* <p className="bio">{user.bio}</p>
    <a href={`https://github.com/${user.github_username}`}>Acessar perfil no GitHub</a> */}
    <button className="button btn">Edit</button> 
    <button className="button"  onClick={() => deleteUser(user._id)}>Delete</button>
  </li>


)}

export default UserItem;