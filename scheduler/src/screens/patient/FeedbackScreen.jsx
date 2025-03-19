// import React, { useState } from 'react';

// const FeedbackScreen = () => {
//     const [doctor, setDoctor] = useState('');
//     const [feedback, setFeedback] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Feedback submitted for Dr. ${doctor}: "${feedback}"`);
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


import React from 'react';
import FeedbackForm from '../../components/FeedbackForm';
import { submitFeedback } from '../../services/feedbackService';


const FeedbackScreen = () => {
    const handleFeedbackSubmit = async (feedbackData) => {
        try {
            await submitFeedback(feedbackData);
            alert('Feedback successfully submitted!');
        } catch (error) {
            alert('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <div className="feedback-screen">
            <h1>Submit Feedback</h1>
            <FeedbackForm onSubmit={handleFeedbackSubmit} />
        </div>
    );
};

export default FeedbackScreen;




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