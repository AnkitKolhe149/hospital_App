// AppointmentForm.jsx
import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [therapyType, setTherapyType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ date, time, therapyType });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

            <label>Time:</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

            <label>Therapy Type:</label>
            <select value={therapyType} onChange={(e) => setTherapyType(e.target.value)} required>
                <option value="">Select Therapy</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Neurological">Neurological</option>
                <option value="Sports Injury">Sports Injury</option>
            </select>

            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default AppointmentForm;