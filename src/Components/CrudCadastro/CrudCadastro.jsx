import React from 'react';
import './crudCadastro.css';
import { Link } from 'react-router-dom';
import joelhosdepano from '../../assets/joelhosdepano.svg';

function Cadastro() {
    return(
        <div className='config'>
            <div className='body-config'>
                <div className='container'>

                    <div className="form-image">
                        <img src={joelhosdepano}/>
                    </div>

                    <div className='form'>
                        <form action="#">
                            <div className="form-header">
                                <div className="title">
                                    <h1>Cadastre-se</h1>
                                </div>

                                <div className="login-button">
                                    <button><Link to='/login'>Entrar</Link></button>
                                </div>
                            </div>

                            <div className="input-group">

                                <div className="input-box">
                                    <label  for="firstname">Primeiro nome:</label>
                                    <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required/>
                                </div>

                                <div className="input-box">
                                    <label  for="lastname">Sobrenome:</label>
                                    <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required/>
                                </div>

                                <div className="input-box">
                                    <label  for="email">E-mail:</label>
                                    <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                                 </div>

                                 <div className="input-box">
                                    <label  for="number">Celular:</label>
                                    <input id="number" type="tel" name="number" placeholder="(xx)xxxx-xxxx" required/>
                                </div>

                                <div className="input-box">
                                    <label  for="password">Senha:</label>
                                    <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                                </div>

                                <div className="input-box">
                                    <label  for="Confirmpassword">Confirme sua senha:</label>
                                    <input id="Confirmpassword" type="password" name="Confirmpassword" placeholder="Digite novamente sua senha" required/>
                                </div>
                            </div>

                            <div className="continue-button">
                                <button><a href="#">Enviar</a></button>
                             </div>    
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro