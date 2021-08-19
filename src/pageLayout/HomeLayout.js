import React from 'react';
import LandingSection from "../pages/Home/landingSection";
import MobileRoadmap from "../pages/Home/mobileRoadmap";
import Roadmap from "../pages/Home/roadmap";
import IdoCard from "../components/layout/idoCard";
import Feature from "../pages/Home/feature";
import Footer from "../components/layout/footer";

const HomeLayout = ({useDarkMode, toggleTheme}) => {
    return (
        <>
            <LandingSection darkMode={useDarkMode} landingContainerWidth={'lg:max-w-2xl lg:w-full'}/>

            <main>
                <MobileRoadmap/>
                <Roadmap/>
                <IdoCard useDarkMode={useDarkMode}/>
                <Feature darkMode={useDarkMode}/>
            </main>
        </>
    );
};

export default HomeLayout;