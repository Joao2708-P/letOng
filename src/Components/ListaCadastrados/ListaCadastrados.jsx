import './ListaCadastrados.css';
import {getAllUsers} from '../../services/users/userService';
import React, {useEffect, useState} from 'react';

function ListaCadastrados() {

        const [users, setUsers] = useState([]);

        useEffect(() => {
            // Aqui você chama a função para buscar os usuários
            getAllUsers()
                .then(users => {
                    // Atualiza o estado com a lista de usuários retornada
                    setUsers(users);
                })
                .catch(error => {
                    console.error('Erro ao buscar usuários:', error);
            });
        }, []);
    return(

        <div>
            <div className='content'>
                <div className='lista'>
                    <table id='customer'>
                        <thead>
                            <tr>
                                <th>Primeiro Nome</th>
                                <th>Sobrenome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListaCadastrados