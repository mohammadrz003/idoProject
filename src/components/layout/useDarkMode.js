import { useState, useEffect } from "react";

export const useDarkModes = () => {
  const [useDarkMode, setDarkMode] = useState("dark");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setDarkMode(mode);
  };

  const toggleTheme = () => {
    useDarkMode === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setDarkMode(localTheme) : setMode("dark");
  }, []);

  return [useDarkMode, toggleTheme];
};
