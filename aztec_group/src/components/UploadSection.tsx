import React from 'react';
import '../assets/scss/UploadSection.scss';

const UploadSection: React.FC = () => {
  return (
    <div className="upload-section">
      <h1>Upload PDF</h1>
      <div className="upload-box">
        <span>Drop files here</span>
        <button>Select File</button>
      </div>
    </div>
  );
}

export default UploadSection;
