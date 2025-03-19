import express from 'express';
import { submitFeedback, getDoctorFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

// Feedback routes
router.post('/submit', submitFeedback);
router.get('/doctor/:doctorId', getDoctorFeedback);

export default router;
