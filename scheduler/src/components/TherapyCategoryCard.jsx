// TherapyCategoryCard.jsx
import React from 'react';

const TherapyCategoryCard = ({ category, description }) => (
    <div className="therapy-category-card">
        <h3>{category}</h3>
        <p>{description}</p>
    </div>
);

export default TherapyCategoryCard;