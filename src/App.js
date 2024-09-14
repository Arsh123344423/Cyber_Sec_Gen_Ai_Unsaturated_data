import React, { useState } from 'react';
import Header from './components/Header';
import ReportUploader from './components/ReportUploader';
import ChatBox from './components/ChatBox';
import './App.css';

const App = () => {
    const [report, setReport] = useState(null);

    const handleFileUpload = (uploadedFile) => {
    setReport(uploadedFile);
    // Here you could send the report to the backend for analysis
    };

    return (
    <div className="app-container">
        <div className="background"></div>
        <div className="app-content">
        <Header />
        <div className="mainContent">
        {/* Other components like QuestionInput, AnswerDisplay, ChatBox */}
        </div>
        <div className="container">
            <ReportUploader onFileUpload={handleFileUpload} />
            {report && <ChatBox />}
        </div>
        </div>
    </div>
    );    
};

export default App;
