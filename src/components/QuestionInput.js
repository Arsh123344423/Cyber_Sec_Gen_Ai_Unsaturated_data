import React, { useState } from 'react';
import './styles/QuestionInput.css';

const QuestionInput = ({ onSubmit }) => {
    const [question, setQuestion] = useState('');

    const handleInputChange = (e) => {
    setQuestion(e.target.value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
        onSubmit(question);
        setQuestion('');
    }
    };

    return (
    <div className="questionInput">
        <input 
        type="text" 
        placeholder="Ask your question here..." 
        value={question} 
        onChange={handleInputChange} 
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
    );
};

export default QuestionInput;
