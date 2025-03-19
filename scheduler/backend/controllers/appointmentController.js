import Appointment from '../models/Appointment.js';

// Book an appointment
export const bookAppointment = async (req, res) => {
    const { patientId, doctorId, date, time, therapyCategory } = req.body;
    try {
        const newAppointment = await Appointment.create({
            patientId,
            doctorId,
            date,
            time,
            therapyCategory
        });
        res.status(201).json({ message: 'Appointment booked successfully', newAppointment });
    } catch (error) {
        res.status(500).json({ message: 'Error booking appointment', error: error.message });
    }
};

// Get all appointments for a specific doctor
export const getDoctorAppointments = async (req, res) => {
    const { doctorId } = req.params;
    try {
        const appointments = await Appointment.find({ doctorId });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error: error.message });
    }
};

// Get all appointments for a specific patient
export const getPatientAppointments = async (req, res) => {
    const { patientId } = req.params;
    try {
        const appointments = await Appointment.find({ patientId });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error: error.message });
    }
};

// Cancel an appointment
export const cancelAppointment = async (req, res) => {
    const { appointmentId } = req.params;
    try {
        await Appointment.findByIdAndDelete(appointmentId);
        res.status(200).json({ message: 'Appointment canceled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error canceling appointment', error: error.message });
    }
};
