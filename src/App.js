import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCamera, faMicrophone, faMap, faPencil, faHotel, faMusic, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [previousQuestions, setPreviousQuestions] = useState([]);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const handleAddQuestion = () => {
    setPreviousQuestions([...previousQuestions, 'New question']);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="container">
      <div className={`sidebar ${isSidebarExpanded ? 'expanded' : ''}`}>
        <div
          className="sidebar-icon"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faEllipsisV} size="lg" color="#fff" />
        </div>

        {isSidebarExpanded && previousQuestions.length > 0 && (
          <div className="previous-questions-list">
            {previousQuestions.map((question, index) => (
              <div key={index} className="previous-question-item">
                {question}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="main-content">
        <div className="scroll-container">
          <h1 className="greeting">Hello, <span className="user-name">Arsh</span></h1>
          <h2 className="subtitle">How can I help you today?</h2>

          <div className="card-container">
            <div className="card">
              <div className="card-content">
                <p className="card-text">Quiz me on famous sites around the world</p>
                <FontAwesomeIcon icon={faMap} size="lg" color="#fff" />
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <p className="card-text">Come up with a product name for a new app</p>
                <FontAwesomeIcon icon={faPencil} size="lg" color="#fff" />
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <p className="card-text">Find hotels for a New Year's trip to San Francisco</p>
                <FontAwesomeIcon icon={faHotel} size="lg" color="#fff" />
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <p className="card-text">Write lyrics to a song about heartbreak</p>
                <FontAwesomeIcon icon={faMusic} size="lg" color="#fff" />
              </div>
            </div>
          </div>
        </div>

        <div className="prompt-container">
          <input
            type="text"
            placeholder="Enter a prompt here"
            className="text-input"
          />
          <FontAwesomeIcon icon={faCamera} size="lg" color="#fff" className="icon" />
          <FontAwesomeIcon icon={faMicrophone} size="lg" color="#fff" className="icon" />
          <button className="submit-button" onClick={handleAddQuestion}>
            <FontAwesomeIcon icon={faArrowUp} size="lg" color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
