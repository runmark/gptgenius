'use client';
import { useState } from "react";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
    winter: "winter",
    dracula: 'dracula',
};

const ThemeToggle = () => {

    const [theme, setTheme] = useState(themes.winter);

    const toggleTheme = () => {
        // console.log(theme, themes.winter, theme === themes.winter);
        const newTheme = (theme === themes.winter ? themes.dracula : themes.winter);
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    };

    return (
        // <div>
        <button onClick={toggleTheme} className="btn btn-sm btn-outline">
            {theme === themes.winter ? (
                <BsMoonFill className="h-4 w-4" />
            ) : (
                <BsSunFill className="h-4 w-4" />
            )}
        </button>
        // </div>
    );
}

export default ThemeToggle;