import React, { useState, useEffect } from "react";
import "./style.css";
import Roadmap from "./components/layout/roadmap";
import MobileRoadmap from "./components/layout/mobileRoadmap";
import IdoCard from "./components/layout/idoCard";
import Feature from "./components/layout/feature";
import Footer from "./components/layout/footer";
import LandingSection from "./components/layout/landingSection";
import { useDarkMode } from "./components/layout/useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className={`${theme}`}>
      {/* <Landing/> */}
      <LandingSection darkMode={theme} />

      <main>
        <MobileRoadmap />
        <Roadmap />
        <IdoCard />
        <Feature darkMode={theme} />
        <Footer darkMode={theme} setDark={toggleTheme} />
      </main>
    </div>
  );
}

export default App;
