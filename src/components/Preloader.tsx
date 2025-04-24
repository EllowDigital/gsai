import React from 'react';
import './Preloader.css'; // Import the updated CSS for the preloader

const Preloader: React.FC = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-wrapper">
        <div className="preloader-circle"></div>
        <div className="preloader-text">Ghatak Sports Academy</div>
      </div>
    </div>
  );
};

export default Preloader;
