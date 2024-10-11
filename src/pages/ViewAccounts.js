import React, { useEffect, useState } from 'react';
import { getAccounts } from '../api';

const ViewAccounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await getAccounts();
                setAccounts(response.data);
            } catch (error) {
                console.error('Error fetching accounts:', error);
            }
        };

        fetchAccounts();
    }, []);

    return (
        <div>
            <h2>Lista de Cuentas</h2>
            <ul>
                {accounts.map((account) => (
                    <li key={account.id}>
                        {account.name} - {account.documentId} - Saldo: {account.balance}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewAccounts;
