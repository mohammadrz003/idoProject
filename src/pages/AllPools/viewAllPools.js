import React, { useRef, useState } from "react";
import Classes from "./poolsStyle.module.css";
import Typing from "react-typing-animation";
// notify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// image
import NavBar from "../../components/layout/navBar";
import PoolsList from "./poolsList";
import StarsParticles from "./starsParticles";
import spaceMan from "../../img/spaceman.svg";
import { ModalBlackBackground } from "../PoolsDetail/style/JoinPoolModal.style";

const navigation = [
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const ViewAllPools = ({ darkMode, landingContainerWidth, navJustify }) => {
  const notify = () => {
    toast.error("please connect wallet");
  };
  const warningNotif = () => {
    toast.info("Not found");
  };
  const commingSoon = () => {
    toast.info("Comming soon");
  };

  return (
    <>
      <div className="relative bg-darkMode-600 overflow-hidden">
        <div className="container mx-auto">
          <NavBar darkMode={darkMode} navigation={navigation} />
        </div>

        {/*pools header*/}
        <div className="scene relative">
          <StarsParticles />

          <header className="relative container mx-auto py-24 text-center">
            <div
              className={`${Classes.bounceEffects} absolute lg:-bottom-10 lg:-left-9 xl:bottom-0 xl:left-2 bottom-0 left-2`}
            >
              <img className="w-40 lg:w-52" src={spaceMan} alt="" />
            </div>
            <Typing speed={1} hideCursor="true" className="text-white text-center lg:text-center font-semibold text-5xl">
                Decentralized{" "}
              <span className={`${Classes.textGradient}`}>
                Launchpad Platform
              </span>
            </Typing>
            <div className="relative z-10 inline-block p-px bg-gradient-to-tl from-orange-500 to-orange-300 mt-8">
              <a
                className="relative z-10 text-white bg-darkMode-600 inline-block font-medium leading-none py-3 px-9"
                href="#"
              >
                Get started
              </a>
            </div>
          </header>
        </div>

        <svg
          id="wave"
          viewBox="0 0 1440 260"
          className="w-full h-40"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1B223F"
            d="M0,78L26.7,73.7C53.3,69,107,61,160,56.3C213.3,52,267,52,320,65C373.3,78,427,104,480,99.7C533.3,95,587,61,640,60.7C693.3,61,747,95,800,104C853.3,113,907,95,960,78C1013.3,61,1067,43,1120,52C1173.3,61,1227,95,1280,95.3C1333.3,95,1387,61,1440,73.7C1493.3,87,1547,147,1600,156C1653.3,165,1707,121,1760,121.3C1813.3,121,1867,165,1920,186.3C1973.3,208,2027,208,2080,203.7C2133.3,199,2187,191,2240,164.7C2293.3,139,2347,95,2400,91C2453.3,87,2507,121,2560,151.7C2613.3,182,2667,208,2720,203.7C2773.3,199,2827,165,2880,164.7C2933.3,165,2987,199,3040,190.7C3093.3,182,3147,130,3200,112.7C3253.3,95,3307,113,3360,138.7C3413.3,165,3467,199,3520,212.3C3573.3,225,3627,217,3680,195C3733.3,173,3787,139,3813,121.3L3840,104L3840,260L3813.3,260C3786.7,260,3733,260,3680,260C3626.7,260,3573,260,3520,260C3466.7,260,3413,260,3360,260C3306.7,260,3253,260,3200,260C3146.7,260,3093,260,3040,260C2986.7,260,2933,260,2880,260C2826.7,260,2773,260,2720,260C2666.7,260,2613,260,2560,260C2506.7,260,2453,260,2400,260C2346.7,260,2293,260,2240,260C2186.7,260,2133,260,2080,260C2026.7,260,1973,260,1920,260C1866.7,260,1813,260,1760,260C1706.7,260,1653,260,1600,260C1546.7,260,1493,260,1440,260C1386.7,260,1333,260,1280,260C1226.7,260,1173,260,1120,260C1066.7,260,1013,260,960,260C906.7,260,853,260,800,260C746.7,260,693,260,640,260C586.7,260,533,260,480,260C426.7,260,373,260,320,260C266.7,260,213,260,160,260C106.7,260,53,260,27,260L0,260Z"
          ></path>
        </svg>

        <div className="bg-darkMode-800">
          <div className="container mx-auto px-3">
            <PoolsList />
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ViewAllPools;
