import React, { useState } from 'react';

import './style.css';

function DevForm({ onSubmit }){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [descricao, setDescricao] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            nome,
            email,
            descricao,
        });

        setNome('');
        setEmail('');
        setDescricao('');
    }
   
    return (
        <form onSubmit={handleSubmit}>
        <h1>Cadastrar</h1>
          <div className="input-block">
            <label htmlFor="nome">Nome</label>
            <input 
            name="nome" 
            id="nome" 
            required 
            value={nome} 
            onChange={e =>setNome(e.target.value)} />
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" 
            id="email" 
            required 
            value={email} 
            onChange={e =>setEmail(e.target.value)} />
            <label htmlFor='descricao'>Descrição</label>
            <input name="descricao" id="descricao"
            value={descricao} 
            onChange={e => setDescricao(e.target.value)} />
            <label id="thambnail">Avatar</label>
                <input type="file"/>
                <img src="" alt="" />
          </div>
          <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;