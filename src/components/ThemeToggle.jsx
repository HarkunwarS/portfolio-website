import React, { useState, useEffect } from 'react';
import { applyTheme } from '../utils/theme';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme} className="ml-4 p-2">
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 7a7 7 0 110-14 7 7 0 010 14z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293a8 8 0 010-11.314C13.313 2.687 9.5 1.74 6.364 3.636c3.908 2.54 7.019 6.651 9.558 10.559-.387-.773-.772-1.628-1.121-2.501a7.963 7.963 0 002.492 1.121zM2.707 6.707A8 8 0 0111.314 9.85c.388-.774.744-1.629 1.121-2.502A7.963 7.963 0 0112.93 8c-1.812-.387-3.668-.705-5.558-1.02a7.963 7.963 0 012.121-2.121A2 2 0 007.1 3.88c-.387 1.89-.705 3.746-1.09 5.558-.388-.774-.773-1.629-1.121-2.502zM3.88 12.93a8 8 0 019.314 5.656 8.068 8.068 0 01-5.558-1.121c.387-1.89.644-3.746 1.02-5.557a7.963 7.963 0 01-2.492-1.121c-.774.388-1.628.773-2.501 1.121a7.963 7.963 0 00-2.493-2.492z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;