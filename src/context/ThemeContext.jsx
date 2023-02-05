import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("isDarkMode", darkMode);
  }, [darkMode]);
  const values = {
    darkMode,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
