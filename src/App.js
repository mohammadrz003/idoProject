import React, { useState, useEffect } from "react";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/footer";
import { useDarkModes } from "./components/layout/useDarkMode";
import HomeLayout from "./pageLayout/HomeLayout";
import AllPoolsLayout from "./pageLayout/AllPoolsLayout";
import PoolsDetailLayout from "./pageLayout/PoolsDetailLayout";
import Whitepaper from "./pages/Whitepaper";

function App() {
  const [useDarkMode, toggleTheme] = useDarkModes();

  return (
    <div className={`${useDarkMode}`}>
      <BrowserRouter>
        <Switch>
          <Route
            path={"/pools/:poolId"}
            component={() => <PoolsDetailLayout darkMode={useDarkMode} />}
          />
          <Route
            path={"/pools"}
            component={() => <AllPoolsLayout darkMode={useDarkMode} />}
          />
          <Route path={"/whitepaper"} component={Whitepaper} />
          <Route
            exact
            path={"/"}
            component={() => <HomeLayout useDarkMode={useDarkMode} />}
          />
        </Switch>
      </BrowserRouter>

      <Footer darkMode={useDarkMode} setDark={toggleTheme} />
    </div>
  );
}

export default App;
