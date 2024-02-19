/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("dark");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(localStorage.getItem("theme-calculator") ?? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme-calculator", theme)
    document.documentElement.classList = theme
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
