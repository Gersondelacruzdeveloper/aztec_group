import React, { useRef, useState } from 'react';
import '../assets/scss/UploadSection.scss';

const UploadSection: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };

  const handleSubmit = () => {
    if (selectedFiles.length > 0) {
      // Handle the file upload logic here
      console.log('Submitting files:', selectedFiles);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="upload-section">
      <h1>Upload PDF</h1>
      <div className="upload-box">
        <span>Drop files here</span>
        <button onClick={handleFileSelect}>Select File</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="application/pdf"
          multiple
        />
        {selectedFiles.length > 0 && (
          <div className="file-list">
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
            <button onClick={handleSubmit} className="submit-button">Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadSection;
