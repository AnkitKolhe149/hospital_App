// import React, { useState } from 'react';
// import { submitFeedback } from '../services/apiService';

// const FeedbackScreen = () => {
//     const [doctor, setDoctor] = useState('');
//     const [feedback, setFeedback] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await submitFeedback(doctor, feedback);
//             alert(`Feedback submitted for Dr. ${doctor}`);
//             setDoctor('');
//             setFeedback('');
//         } catch (error) {
//             alert('Failed to submit feedback. Please try again.');
//         }
//     };

//     return (
//         <div className="feedback-container">
//             <h1>Submit Feedback</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>Doctor's Name:</label>
//                 <input
//                     type="text"
//                     value={doctor}
//                     onChange={(e) => setDoctor(e.target.value)}
//                     placeholder="Enter doctor's name"
//                     required
//                 />

//                 <label>Feedback:</label>
//                 <textarea
//                     value={feedback}
//                     onChange={(e) => setFeedback(e.target.value)}
//                     placeholder="Share your experience..."
//                     rows="4"
//                     required
//                 ></textarea>

//                 <button type="submit">Submit Feedback</button>
//             </form>
//         </div>
//     );
// };

// export default FeedbackScreen;


import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // Ensure this matches your backend port
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;
