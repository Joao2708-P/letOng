import React from 'react';
import './CrudLogin.css';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div className='config'>
           <div className="content-body">
                <section>
                    <form action="">
                        <h1>Tech Byte </h1>
                        <div className="linha"></div>
                        <h3>Login</h3>
                        <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input id="login" type="text" required/>
                        <label for="">Usuário</label>
                        </div>

                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input id="senha" type="password" required/>
                            <label for="">Senha</label>
                        </div>

                        <div className="forget">
                            <label for="">Esqueceu sua senha?</label>
                            <a href="#">Refazer senha</a>
                        </div>
                        <input id="Entrar" class="Entrar" type="button" value="Entrar" onclick="logar()"/>
                        <div className="register">
                                <p>Não tenho uma conta: <Link to="/singUp">Cadastrar-se</Link> </p>
                        </div>
                    </form>
                </section>
           </div>
        </div>
    )
}

export default Login