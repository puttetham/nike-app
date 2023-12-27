import { useEffect, useState } from 'react';

const DarkModeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true' ? true : false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);


    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div>
    <button onClick={toggleDarkMode}>
        {isDarkMode 
          ? <p className='text-white'>🌞</p> 
          : <p className='text-black'>🌚</p>
        }
      </button>
    </div>
  );
};

export default DarkModeToggle;