import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/patient/PatientdashBoardScreen';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                
                {/* Protected routes for authenticated users only */}
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <DashboardScreen />
                    </PrivateRoute>
                } />
            </Routes>
        </Router>
    );
};

export default AppRouter;
