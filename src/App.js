import React from "react";
import "./style.css";
import Header from "./components/layout/header";
import Landing from "./components/layout/landing";
import Roadmap from "./components/layout/roadmap";
import IdoCard from "./components/layout/idoCard";


function App() {
  return (
    <div>
      <Header/>

      <main>
        <Landing/>
        <Roadmap/>
        <IdoCard/>
      </main>
    </div>
  );
}

export default App;
