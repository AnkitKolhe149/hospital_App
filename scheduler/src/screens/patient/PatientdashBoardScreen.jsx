// import React from 'react';
// import { Link } from 'react-router-dom';

// const PatientDashboardScreen = () => {
//     return (
//         <div className="dashboard-container">
//             <h1>Welcome to Your Dashboard</h1>
//             <div className="dashboard-actions">
//                 <Link to="/appointments">
//                     <button>Book an Appointment</button>
//                 </Link>
//                 <Link to="/patient/history">
//                     <button>View Visit History</button>
//                 </Link>
//                 <Link to="/patient/feedback">
//                     <button>Give Feedback</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default PatientDashboardScreen;




import React, { useEffect, useState } from 'react';
import TherapyCategoryCard from '../../components/TherapyCategoryCard';
import {  fetchTherapyCategories } from '../../services/appointmentService';



const PatientDashboardScreen = () => {
    const [therapyCategories, setTherapyCategories] = useState([]);

    useEffect(() => {
        const loadTherapyCategories = async () => {
            try {
                const data = await fetchTherapyCategories();
                setTherapyCategories(data);
            } catch (error) {
                console.error('Failed to fetch therapy categories:', error);
            }
        };
        loadTherapyCategories();
    }, []);

    return (
        <div className="patient-dashboard">
            <h1>Therapy Categories</h1>
            {therapyCategories.length > 0 ? (
                therapyCategories.map((category) => (
                    <TherapyCategoryCard 
                        key={category.id} 
                        category={category.name} 
                        description={category.description} 
                    />
                ))
            ) : (
                <p>No therapy categories found.</p>
            )}
        </div>
    );
};

export default PatientDashboardScreen;
