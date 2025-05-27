import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="toggle-switch" onClick={toggleTheme} aria-label="Alternar tema">
            <div className={`slider ${theme}`}>
                {theme === 'light' ? <FaSun /> : <FaMoon />}
            </div>
        </div>
    );
};

export default ThemeToggle;
