import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentScreen from './screens/patient/AppointmentScreen';
import DoctorDashboardScreen from './screens/patient/DoctorDashboardScreen';
import LoginScreen from './screens/patient/LoginScreen';
import NotFoundScreen from './screens/patient/NotFoundScreen';
import PatientDashboardScreen from './screens/patient/PatientdashBoardScreen';
import RegisterScreen from './screens/patient/RegisterScreen';
import FeedbackScreen from './screens/patient/FeedbackScreen';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/" element={<LoginScreen />} />
              <Route path="/appointment" element={<AppointmentScreen />} />
              <Route path="/doctor-dashboard" element={<DoctorDashboardScreen />} />
              <Route path="/patient-dashboard" element={<PatientDashboardScreen />} />
              <Route path="/feedback" element={<FeedbackScreen />} />
              <Route path="*" element={<NotFoundScreen />} />
          </Routes>
      </Router>
  );
};

export default App;
