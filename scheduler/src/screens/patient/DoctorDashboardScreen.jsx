// import React from 'react';

// const DoctorDashboardScreen = () => {
//     const upcomingAppointments = [
//         { patient: 'John Doe', date: '2025-03-20', time: '10:00 AM', therapy: 'Orthopedic' },
//         { patient: 'Jane Smith', date: '2025-03-21', time: '2:00 PM', therapy: 'Neurological' },
//         { patient: 'Alice Johnson', date: '2025-03-22', time: '11:30 AM', therapy: 'Sports Injury' },
//     ];

//     return (
//         <div className="doctor-dashboard-container">
//             <h1>Doctor's Dashboard</h1>
//             <h2>Upcoming Appointments</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Patient</th>
//                         <th>Date</th>
//                         <th>Time</th>
//                         <th>Therapy Type</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {upcomingAppointments.map((appointment, index) => (
//                         <tr key={index}>
//                             <td>{appointment.patient}</td>
//                             <td>{appointment.date}</td>
//                             <td>{appointment.time}</td>
//                             <td>{appointment.therapy}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default DoctorDashboardScreen;


import React, { useEffect, useState } from 'react';
import PatientCard from '../../components/PatientCard';
import { fetchPatients } from '../../services/appointmentService';



const DoctorDashboardScreen = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const loadPatients = async () => {
            try {
                const data = await fetchPatients();
                setPatients(data);
            } catch (error) {
                console.error('Failed to fetch patients:', error);
            }
        };
        loadPatients();
    }, []);

    return (
        <div className="doctor-dashboard">
            <h1>Doctor Dashboard</h1>
            {patients.length > 0 ? (
                patients.map((patient) => (
                    <PatientCard key={patient.id} patient={patient} />
                ))
            ) : (
                <p>No patients found.</p>
            )}
        </div>
    );
};

export default DoctorDashboardScreen;
