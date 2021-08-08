import React, { useState } from "react";
import {
  CircleBox,
  SemiCircle,
  SemiCircleTwo,
  IdoImg,
  ProgressRocket,
  ProgressWrapper,
  RocketBox,
} from "./progress.style";
import styled from "styled-components";
import rocketImg from "../../../img/progress-rocket.svg";
import { Waypoint } from "react-waypoint";

const GradientBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 119px;
  height: 119px;
  border-radius: 50%;
  background: rgb(241, 145, 67);
  background: linear-gradient(
    312deg,
    rgba(241, 145, 67, 1) 0%,
    rgba(255, 119, 61, 1) 50%,
    rgba(245, 85, 54, 1) 100%
  );
`;

const TransparentBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #292c36;
  z-index: 3;
`;

const MobileProgressBar = ({ image, percentage }) => {
  const [idoPercent, setIdoPercent] = useState(0);

  const addPercent = () => {
    setIdoPercent((prev) => prev + 1);
  };

  return (
    <Waypoint onEnter={()=> setIdoPercent(90)}>
      <ProgressWrapper>
        <RocketBox percent={idoPercent}>
          <ProgressRocket src={rocketImg} />
        </RocketBox>

        <CircleBox>
          <TransparentBackground />
          <GradientBackground />
          <IdoImg src={image} />
          <SemiCircle percent={idoPercent} />
          <SemiCircleTwo percent={idoPercent} />
        </CircleBox>
        <button onClick={addPercent} className={"text-white"}>
          click me
        </button>
      </ProgressWrapper>
    </Waypoint>
  );
};

export default MobileProgressBar;
