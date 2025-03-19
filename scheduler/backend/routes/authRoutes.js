import express from 'express';
import { registerPatient, loginPatient, registerDoctor, loginDoctor } from '../controllers/authcontroller.js';

const router = express.Router();


router.post('/register', registerUser);


// Patient routes
router.post('/patient/register', registerPatient);
router.post('/patient/login', loginPatient);

// Doctor routes
router.post('/doctor/register', registerDoctor);
router.post('/doctor/login', loginDoctor);

export default router;
