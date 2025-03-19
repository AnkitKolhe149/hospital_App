// PatientCard.jsx
import React from 'react';

const PatientCard = ({ patient }) => (
    <div className="patient-card">
        <h3>{patient.name}</h3>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Condition:</strong> {patient.condition}</p>
    </div>
);

export default PatientCard;