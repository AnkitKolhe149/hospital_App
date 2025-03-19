import API from './api';

export const submitFeedback = async (feedbackData) => {
    const response = await API.post('/feedback', feedbackData);
    return response.data;
};