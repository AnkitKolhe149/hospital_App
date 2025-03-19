// appointmentService.js
import API from './api';
import api from './api';

export const fetchAppointments = async () => {
    const response = await API.get('/appointments');
    return response.data;
};

export const bookAppointment = async (appointmentData) => {
    const response = await API.post('/appointments', appointmentData);
    return response.data;
};

// Add these functions
// export const fetchPatients = async () => {
//     const response = await API.get('/patients');
//     return response.data;
// };

export const fetchTherapyCategories = async () => {
    const response = await API.get('/therapy-categories');
    return response.data;
};




export const fetchPatients = async () => {
    try {
        const response = await api.get('/api/patients');
        return response.data;
    } catch (error) {
        console.error('Error fetching patients:', error.message);
        throw error; // Handle error gracefully in your components
    }
};
