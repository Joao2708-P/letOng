import React, { useState } from 'react';
import './CrudLogin.css';
import { Link, Navigate} from 'react-router-dom';
import { loginUser } from '../../services/users/userService';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const token = await loginUser({ email, password }); 
            console.log('Token de autenticação:', token);
         
            setIsLoggedIn(true);
        } catch (error) {
            setError('Credenciais inválidas. Por favor, tente novamente.'); 
            console.error('Erro ao fazer login:', error);
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/lista" />;
    }

    return (
        <div className='config'>
            <div className="content-body">
                <section>
                    <form onSubmit={handleSubmit}>
                        <h1>Tech Byte </h1>
                        <div className="linha"></div>
                        <h3>Login</h3>
                        {error && <div className="error-message">{error}</div>}
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input 
                                type="text" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label for="">Usuário</label>
                        </div>

                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label for="">Senha</label>
                        </div>

                        <div className="forget">
                            <label for="">Esqueceu sua senha?</label>
                            <a href="#">Refazer senha</a>
                        </div>
                        <input className="Entrar" type="submit" value="Entrar" />
                        <div className="register">
                            <p>Não tenho uma conta: <Link to="/singUp">Cadastrar-se</Link> </p>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Login;