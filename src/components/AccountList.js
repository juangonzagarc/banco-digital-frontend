import React from 'react';

function AccountList({ accounts }) {
    return (
        <table>
            <thead>
            <tr>
                <th># Cuenta</th>
                <th>Documento</th>
                <th>Nombre</th>
                <th>Saldo</th>
            </tr>
            </thead>
            <tbody>
            {accounts.map((account) => (
                <tr key={account.id}>
                    <td>{account.id}</td>
                    <td>{account.cedula}</td>
                    <td>{account.nombre}</td>
                    <td>{account.balance}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default AccountList;
