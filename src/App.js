import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthForm from './pages/AuthForm'; // Formulario de autenticación
import Dashboard from './pages/Dashboard'; // Pantalla principal con los tres botones
import EstadoCuenta from './EstadoCuenta';
import ConsultaGeneral from './ConsultaGeneral';
import RealizarDeposito from './RealizarDeposito';
import CreateAccount from './pages/CreateAccount';
import ViewAccounts from './pages/ViewAccounts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AuthForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/estado-cuenta" element={<EstadoCuenta />} />
                    <Route path="/consulta-general" element={<ConsultaGeneral />} />
                    <Route path="/deposito" element={<RealizarDeposito />} />
                    <Route path="/crear-cuenta" element={<CreateAccount />} />
                    <Route path="/ver-cuentas" element={<ViewAccounts />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
