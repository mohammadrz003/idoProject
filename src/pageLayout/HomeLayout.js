import React from "react";
import LandingSection from "../pages/Home/landingSection";
import MobileRoadmap from "../pages/Home/mobileRoadmap";
import Roadmap from "../pages/Home/roadmap";
import IdoCard from "../components/layout/idoCard";
import WhitepaperPreview from "../pages/Home/whitepaperPreview";
import Partners from "../pages/Home/partners";

const HomeLayout = ({ useDarkMode, toggleTheme }) => {
  return (
    <>
      <LandingSection
        darkMode={useDarkMode}
        landingContainerWidth={"lg:max-w-2xl lg:w-full"}
      />

      <main>
        <MobileRoadmap />
        <Roadmap />
        <IdoCard useDarkMode={useDarkMode} />
        <WhitepaperPreview useDarkMode={useDarkMode} />
        <Partners />
      </main>
    </>
  );
};

export default HomeLayout;
