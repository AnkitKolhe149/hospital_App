import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    medicalHistory: { type: [String], default: [] },
    appointmentHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
