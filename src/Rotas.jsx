import React from "react";
import CrudCadastro from './Components/CrudCadastro/CrudCadastro';
import Login from "./Components/CrudLogin/CrudLogin";
import Home from "./Components/Home/Home"
import { Routes, Route } from "react-router-dom";

function Rotas() {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="singUp" element={<CrudCadastro/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
    )
}

export default Rotas