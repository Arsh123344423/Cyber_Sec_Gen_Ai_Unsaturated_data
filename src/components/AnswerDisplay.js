import React from 'react';
import './styles/AnswerDisplay.css';

const AnswerDisplay = ({ answer }) => {
    return (
        <div className="answerDisplay">
        <p>{answer}</p>
        </div>
    );
};

export default AnswerDisplay;
