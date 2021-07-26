import React, {useState} from "react";
import "./style.css";
import Roadmap from "./components/layout/roadmap";
import MobileRoadmap from "./components/layout/mobileRoadmap";
import IdoCard from "./components/layout/idoCard";
import Feature from "./components/layout/feature";
import Footer from "./components/layout/footer";
import LandingSection from "./components/layout/landingSection";



function App() {
  const [useDarkMode, setDarkMode] = useState(false);

  return (
    <div className={`${useDarkMode ? 'dark' : ''}`}>
      {/* <Landing/> */}
      <LandingSection/>

      <main>
        <MobileRoadmap/>
        <Roadmap/>
        <IdoCard/>
        <Feature darkMode={useDarkMode}/>
        <Footer darkMode={useDarkMode} setDark={setDarkMode}/>
      </main>
    </div>
  );
}

export default App;
