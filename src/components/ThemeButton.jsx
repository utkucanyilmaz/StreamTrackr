import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeButton() {
  const { darkMode, setDarkMode } = useTheme();
  const handleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <button
      className={`${
        darkMode ? "bg-tw-white text-tw-black" : "bg-tw-black text-white"
      } py-1 px-3 text-sm transition-colors rounded-lg`}
      onClick={handleDarkMode}
    >
      {darkMode ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeButton;
