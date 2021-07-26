import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [useDarkMode, setDarkMode] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("useDarkMode", mode);
    setDarkMode(mode);
  };

  let darkStatus = (status) => {
    if (status) {
      setMode(true);
      return "dark";
    } else {
      setMode(false);
      return "";
    }
  };

  const toggleTheme = () => {
    useDarkMode ? darkStatus(true) : darkStatus(false)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("useDarkMode");
    localTheme ? setDarkMode(localTheme) : setMode(false);
  }, []);

  return [useDarkMode, toggleTheme]
};
