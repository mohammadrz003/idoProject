import React, {useState, useEffect} from "react";
import "./style.css";
import Roadmap from "./pages/Home/roadmap";
import MobileRoadmap from "./pages/Home/mobileRoadmap";
import IdoCard from "./components/layout/idoCard";
import Feature from "./pages/Home/feature";
import Footer from "./components/layout/footer";
import LandingSection from "./pages/Home/landingSection";
import {useDarkModes} from "./components/layout/useDarkMode";
import ViewAllPools from "./pages/AllPools/viewAllPools";

function App() {
    const [useDarkMode, toggleTheme] = useDarkModes();

    return (
        <div className={`${useDarkMode}`}>
            {/* view all pools page */}
            <ViewAllPools darkMode={useDarkMode} landingContainerWidth={''} navJustify={''}/>
            {/*<LandingSection darkMode={useDarkMode} landingContainerWidth={'lg:max-w-2xl lg:w-full'}/>*/}
            <Footer darkMode={useDarkMode} setDark={toggleTheme}/>

            {/* main page */}
            {/* <LandingSection darkMode={useDarkMode} landingContainerWidth={'lg:max-w-2xl lg:w-full'} />

      <main>
        <MobileRoadmap />
        <Roadmap />
        <IdoCard />
        <Feature darkMode={useDarkMode} />
        <Footer darkMode={useDarkMode} setDark={toggleTheme} />
      </main> */}
        </div>
    );
}

export default App;
