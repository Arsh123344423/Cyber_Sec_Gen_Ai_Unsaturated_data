import React, { useState } from 'react';
import './styles/ReportUploader.css';

const ReportUploader = ({ onFileUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        onFileUpload(uploadedFile);
    };

    return (
        <div className="uploader">
        <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
        {file && <p>{file.name}</p>}
        </div>
    );
};

export default ReportUploader;
