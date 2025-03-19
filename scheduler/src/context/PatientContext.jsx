// PatientContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { fetchPatients } from '../services/appointmentService';

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const loadPatients = async () => {
            const data = await fetchPatients();
            setPatients(data);
        };
        loadPatients();
    }, []);

    return (
        <PatientContext.Provider value={{ patients }}>
            {children}
        </PatientContext.Provider>
    );
};
