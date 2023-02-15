import React from "react";
import { useTheme } from "../context/ThemeContext";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

function ThemeButton() {
  const { darkMode, setDarkMode } = useTheme();

  const handleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <button
      className={`${
        darkMode ? "bg-tw-black" : "bg-tw-white"
      } h-8 w-8 text-sm transition-colors rounded-full flex items-center justify-center
     `}
      onClick={handleDarkMode}
    >
      {darkMode ? (
        <BsSunFill className="text-tw-white" size={20} />
      ) : (
        <BsMoonFill className="text-tw-black" size={18} />
      )}
    </button>
  );
}

export default ThemeButton;
