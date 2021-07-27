import React, { useState, useEffect } from "react";
import "./style.css";
import Roadmap from "./components/layout/roadmap";
import MobileRoadmap from "./components/layout/mobileRoadmap";
import IdoCard from "./components/layout/idoCard";
import Feature from "./components/layout/feature";
import Footer from "./components/layout/footer";
import LandingSection from "./components/layout/landingSection";
import { useDarkModes } from "./components/layout/useDarkMode";

function App() {
  const [useDarkMode, toggleTheme] = useDarkModes();

  return (
    <div className={`${useDarkMode}`}>
      {/* <Landing/> */}
      <LandingSection darkMode={useDarkMode} />

      <main>
        <MobileRoadmap />
        <Roadmap />
        <IdoCard />
        <Feature darkMode={useDarkMode} />
        <Footer darkMode={useDarkMode} setDark={toggleTheme} />
      </main>
    </div>
  );
}

export default App;
