import React, { useState } from 'react';
import './crudCadastro.css';
import { Link } from 'react-router-dom';
import { createUser } from '../../services/users/userService';
import joelhosdepano from '../../assets/joelhosdepano.svg';

function Cadastro() {

        const [formData, setFormData] = useState({
            firstname: '',
            lastname: '',
            email: '',
            number: '',
            password: '',
            confirmPassword: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (formData.password !== formData.confirmPassword) {
                alert('As senhas não coincidem.');
                return;
            }
            try {
                await createUser(formData);
                alert('Usuário cadastrado com sucesso!');
                // Limpar os campos após o cadastro
            } catch (error) {
                console.error('Erro ao cadastrar usuário:', error);
                alert('Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente mais tarde.');
            }
        };
    return(
        <div className='config'>
            <div className='body-config'>
                <div className='container'>
                    <div className="form-image">
                        <img src={joelhosdepano}/>
                    </div>

                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-header">
                                <div className="title">
                                    <h1>Cadastre-se</h1>
                                </div>
                            </div>

                            <div className="input-group">

                                <div className="input-box">
                                    <label  for="firstname">Primeiro nome:</label>
                                    <input id="firstname" type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Digite seu primeiro nome" required/>
                                </div>

                                <div className="input-box">
                                    <label  for="lastname">Sobrenome:</label>
                                    <input id="lastname" type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Digite seu sobrenome" required/>
                                </div>

                                <div className="input-box">
                                    <label  for="email">E-mail:</label>
                                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite seu e-mail" required/>
                                 </div>

                                 <div className="input-box">
                                    <label  for="number">Celular:</label>
                                    <input id="number" type="tel" name="number" value={formData.number} onChange={handleChange} placeholder="(xx)xxxx-xxxx" required/>
                                </div>

                                <div className="input-box">
                                    <label  for="password">Senha:</label>
                                    <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Digite sua senha" required/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="confirmPassword">Confirme sua senha:</label>
                                    <input id="confirmPassword" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Digite novamente sua senha" required/>
                                </div>
                            </div>

                            <div className='login-route'>
                                <p>Já tem uma conta? <Link to="/login">Entre</Link></p>
                            </div>

                            <div className="continue-button">
                                <button type='submit'>Enviar</button>
                             </div>    
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro