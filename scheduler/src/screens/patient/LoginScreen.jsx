// LoginScreen.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login logic for now
        if (email === 'patient@example.com') {
            navigate('/patientDashboard');
        } else if (email === 'doctor@example.com') {
            navigate('/doctor/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginScreen;