// FeedbackForm.jsx
import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
    const [doctor, setDoctor] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ doctor, feedback });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Doctor's Name:</label>
            <input
                type="text"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                placeholder="Enter doctor's name"
                required
            />

            <label>Feedback:</label>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your experience..."
                rows="4"
                required
            ></textarea>

            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;