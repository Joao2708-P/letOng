import { useState } from 'react'
import Cadastro from './Components/CrudCadastro/CrudCadastro'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className ="App">
        <Rotas/>
      </div>
    </BrowserRouter>
  )
}

export default App
