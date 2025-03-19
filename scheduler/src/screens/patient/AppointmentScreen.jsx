import React, { useState } from 'react';

const AppointmentScreen = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [therapyType, setTherapyType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Appointment booked for ${date} at ${time} - Therapy: ${therapyType}`);
    };

    return (
        <div className="appointment-container">
            <h1>Book an Appointment</h1>
            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                
                <label>Time:</label>
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />

                <label>Therapy Type:</label>
                <select
                    value={therapyType}
                    onChange={(e) => setTherapyType(e.target.value)}
                    required
                >
                    <option value="">Select Therapy</option>
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Neurological">Neurological</option>
                    <option value="Sports Injury">Sports Injury</option>
                </select>

                <button type="submit">Confirm Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentScreen;
