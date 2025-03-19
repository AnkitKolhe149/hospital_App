// AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { login, register } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleLogin = async (credentials) => {
        const data = await login(credentials);
        setUser(data.user);
    };

    const handleRegister = async (userData) => {
        const data = await register(userData);
        setUser(data.user);
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleRegister }}>
            {children}
        </AuthContext.Provider>
    );
};