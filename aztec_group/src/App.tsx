import React from 'react';
import Sidebar from './components/Sidebar';
import UploadSection from './components/UploadSection';
import Charts from './components/Charts';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <UploadSection />
        <Charts />
      </div>
    </div>
  );
}

export default App;