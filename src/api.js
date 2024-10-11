import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const createAccount = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/accounts`, data);
        return response.data;
    } catch (error) {
        console.error('Error creating account:', error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || 'Error creating account');
    }
};

export const getAccounts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/accounts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching accounts:', error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || 'Error fetching accounts');
    }
};

export const deposit = async (accountId, amount) => {
    try {
        const response = await axios.post(`${BASE_URL}/accounts/deposit`, {
            accountId,
            amount,
        });
        return response.data;
    } catch (error) {
        console.error('Error making deposit:', error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || 'Error making deposit');
    }
};

export const getClientByDocumentId = async (cedula) => {
    try {
        const response = await axios.get(`${BASE_URL}/clients/${cedula}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching client:', error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || 'Error fetching client');
    }
};
