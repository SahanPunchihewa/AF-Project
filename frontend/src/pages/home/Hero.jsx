import React from 'react';
import { Link } from "react-router-dom";
const Hero = () => {
  const containerStyle = {
    backgroundImage: `url("../team.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    minHeight: '18rem',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const textStyle = {
    color: 'white',
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
  };

  return (
    <div className="container mx-auto px-4 py-[18rem]" style={containerStyle}>
      <div style={overlayStyle} />
      <div className="relative" style={textStyle}>
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Complaint Management System
        </h1>
        <p className="text-lg mb-8">Please click the button below to start.</p>
        <Link to="/customer/login">
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login as Civilian
        </a>
        </Link>
        <Link to="/gov/login">
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
        >
          Login as Authority
        </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
