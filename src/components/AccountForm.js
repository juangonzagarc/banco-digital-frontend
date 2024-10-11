import React, { useState } from 'react';

const AccountForm = ({ onSubmit }) => {
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [balance, setBalance] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando datos:", { cedula, nombre, balance });
        onSubmit({ cedula, nombre, balance });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>ID de Documento:</label>
            <input
                type="text"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                placeholder="Ingrese ID de documento"
            />

            <label>Nombre:</label>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />


            <label>Saldo Inicial:</label>
            <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                placeholder="Ingrese saldo inicial"
                min="0"
            />

            <button type="submit">Crear Cuenta</button>
        </form>
    );
};

export default AccountForm;
