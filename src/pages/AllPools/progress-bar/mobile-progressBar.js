import React, { useState } from "react";
import {
  CircleBox,
  SemiCircle,
  SemiCircleTwo,
  IdoImg,
  ProgressRocket,
  ProgressWrapper,
  RocketBox,
  GradientBackground,
  TransparentBackground,
} from "./progress.style";
import styled from "styled-components";
import rocketImg from "../../../img/progress-rocket.svg";
import { Waypoint } from "react-waypoint";

const MobileProgressBar = ({ image, percentage, display, darkMode, poolsPage }) => {
  const [idoPercent, setIdoPercent] = useState(0);

  return (
    <Waypoint onEnter={() => setIdoPercent(percentage)}>
      <ProgressWrapper className={`md:${display}`}>
        <RocketBox percent={idoPercent}>
          <ProgressRocket src={rocketImg} />
        </RocketBox>

        <CircleBox>
          <TransparentBackground darkMode={darkMode} poolsPage={poolsPage} />
          <GradientBackground />
          <IdoImg src={image} />
          <SemiCircle percent={idoPercent} darkMode={darkMode} poolsPage={poolsPage} />
          <SemiCircleTwo percent={idoPercent} darkMode={darkMode} poolsPage={poolsPage} />
        </CircleBox>
      </ProgressWrapper>
    </Waypoint>
  );
};

export default MobileProgressBar;
