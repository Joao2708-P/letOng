import React from "react";
import CrudCadastro from './Components/CrudCadastro/CrudCadastro';
import Login from "./Components/CrudLogin/CrudLogin";
import Home from "./Components/Home/Home";
import ListaCadastrados from "./Components/ListaCadastrados/ListaCadastrados";
import { Routes, Route } from "react-router-dom";

function Rotas() {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="register" element={<CrudCadastro/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="lista" element={<ListaCadastrados/>}/>
        </Routes>
    )
}

export default Rotas