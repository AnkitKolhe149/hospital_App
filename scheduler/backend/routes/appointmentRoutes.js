import express from 'express';
import {
    bookAppointment,
    getDoctorAppointments,
    getPatientAppointments,
    cancelAppointment
} from '../controllers/appointmentController.js';

const router = express.Router();

// Appointment routes
router.post('/book', bookAppointment);
router.get('/doctor/:doctorId', getDoctorAppointments);
router.get('/patient/:patientId', getPatientAppointments);
router.delete('/:appointmentId/cancel', cancelAppointment);

export default router;
