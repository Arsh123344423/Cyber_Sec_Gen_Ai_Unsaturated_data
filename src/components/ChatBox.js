import React, { useState } from 'react';
import QuestionInput from './QuestionInput';
import AnswerDisplay from './AnswerDisplay';
import './styles/ChatBox.css';

const ChatBox = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    const handleQuestionSubmit = (question) => {
    setQuestions([...questions, question]);
    // Simulate AI response, replace with actual API call to backend AI model.
    const response = "AI Response to: " + question;
    setAnswers([...answers, response]);
    };

    return (
    <div className="chatBox">
        <h2>Ask Questions</h2>
        <QuestionInput onSubmit={handleQuestionSubmit} />
        <div className="chatContainer">
        {questions.map((q, index) => (
            <div key={index}>
            <p><strong>Question:</strong> {q}</p>
            <AnswerDisplay answer={answers[index]} />
            </div>
        ))}
        </div>
    </div>
    );
};

export default ChatBox;
