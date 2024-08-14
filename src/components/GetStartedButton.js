import React from 'react';
import './GetStartedButton.css';

const GetStartedButton = ({ onClick }) => {
  return (
    <button className="get-started-button" onClick={onClick}>
      Get Started
    </button>
  );
};

export default GetStartedButton;
