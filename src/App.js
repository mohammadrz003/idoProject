import React, {useState, useEffect} from "react";
import "./style.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Roadmap from "./pages/Home/roadmap";
import MobileRoadmap from "./pages/Home/mobileRoadmap";
import IdoCard from "./components/layout/idoCard";
import Feature from "./pages/Home/feature";
import Footer from "./components/layout/footer";
import LandingSection from "./pages/Home/landingSection";
import {useDarkModes} from "./components/layout/useDarkMode";
import ViewAllPools from "./pages/AllPools/viewAllPools";
import HomeLayout from "./pageLayout/HomeLayout";
import AllPoolsLayout from "./pageLayout/AllPoolsLayout";

function App() {
    const [useDarkMode, toggleTheme] = useDarkModes();

    return (
        <div className={`${useDarkMode}`}>
            <BrowserRouter>
                <Switch>
                    <Route path={'/pools'} component={() => <AllPoolsLayout/>}/>
                    <Route path={'/'} component={() => <HomeLayout useDarkMode={useDarkMode}/>}/>
                </Switch>
            </BrowserRouter>
            
            <Footer darkMode={useDarkMode} setDark={toggleTheme}/>
        </div>
    );
}

export default App;
