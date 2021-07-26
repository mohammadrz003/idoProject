import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [useDarkMode, setDarkMode] = useState("light");

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
