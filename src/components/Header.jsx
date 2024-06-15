import React from 'react';

const Header = ({ onContactClick }) => {
  return (
    <header className="fixed w-full top-0 left-0 bg-transparent p-5">
      <div className="container mx-auto flex justify-end items-center">
        <button 
          onClick={onContactClick} 
          className="navbar-btn px-4 py-2 rounded text-white"
        >
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;