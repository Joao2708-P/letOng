import React, { createContext, useContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';

// Define as interfaces do usuário e do contexto de autenticação
interface User {
    firstname: string,
    lastname: string,
    email: string,
    number: string,
    password: string,
    confirmPassword: string
  }
  
  interface AuthContextData {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
  }
  
  const AuthContext = createContext<AuthContextData>({} as AuthContextData);
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };

export const AuthProvider = ({ children }) => {
  // Criando o estado do usuário e settado como vazio
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verifica se há um token JWT no armazenamento local ao carregar a página
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        const decodedToken = jwt.decode(token);
        if (decodedToken) {
          // Atualiza o estado do usuário no contexto com as informações do token decodificado
          setUser(decodedToken);
          return;
        }
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }

      // Caso o token esteja inválido ou expirado, faz logout
      logout();
    }
  }, []);

  // Função para fazer login com o token JWT
  const login = (token) => {
    // Armazena o token no armazenamento local
    localStorage.setItem('jwtToken', token);
    // Decodifica o token e atualiza o estado do usuário no contexto
    const decodedToken = jwt.decode(token);
    if (decodedToken) {
      setUser(decodedToken);
    }
  };

  // Função para fazer logout
  const logout = () => {
    // Remove o token do armazenamento local
    localStorage.removeItem('jwtToken');
    // Remove as informações do usuário do estado do contexto
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
