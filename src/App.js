import React from "react";
import "./style.css";
import Roadmap from "./components/layout/roadmap";
import MobileRoadmap from "./components/layout/mobileRoadmap";
import IdoCard from "./components/layout/idoCard";
import Feature from "./components/layout/feature";
import Footer from "./components/layout/footer";
import Example from "./components/layout/landingSection";


function App() {
  return (
    <div>
      <Example/>
      {/* <Header/> */}

      <main>
        {/* <Landing/> */}
        <MobileRoadmap/>
        <Roadmap/>
        <IdoCard/>
        <Feature/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
