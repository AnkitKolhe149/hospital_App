import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Patient from '../models/patient.js';
import Doctor from '../models/Doctor.js';
import dotenv from 'dotenv';
import User from '../models/User.js'; // Assuming User model is defined



dotenv.config();

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};


// Register Patient
export const registerPatient = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingPatient = await Patient.findOne({ email });
        if (existingPatient) return res.status(400).json({ message: 'Patient already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newPatient = await Patient.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: 'Patient registered successfully', newPatient });
    } catch (error) {
        res.status(500).json({ message: 'Error registering patient', error: error.message });
    }
};

// Login Patient
export const loginPatient = async (req, res) => {
    const { email, password } = req.body;
    try {
        const patient = await Patient.findOne({ email });
        if (!patient) return res.status(404).json({ message: 'Patient not found' });

        const isMatch = await bcrypt.compare(password, patient.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, patient });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

// Register Doctor
export const registerDoctor = async (req, res) => {
    const { name, email, password, specialization } = req.body;
    try {
        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) return res.status(400).json({ message: 'Doctor already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newDoctor = await Doctor.create({ name, email, password: hashedPassword, specialization });

        res.status(201).json({ message: 'Doctor registered successfully', newDoctor });
    } catch (error) {
        res.status(500).json({ message: 'Error registering doctor', error: error.message });
    }
};

// Login Doctor
export const loginDoctor = async (req, res) => {
    const { email, password } = req.body;
    try {
        const doctor = await Doctor.findOne({ email });
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, doctor });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};
