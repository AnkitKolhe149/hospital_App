// routes.js
const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    appointment: '/appointment',
    doctorAppointments: '/patient/DoctorDashboardScreen.jsx',  // Corrected for doctor-specific view
    patientDashboard: '/patient/PatientdashBoardScreen', // Matches your patient dashboard route
    feedback: '/feedback',
    notFound: '*' // Handles undefined routes
};

export default routes;


