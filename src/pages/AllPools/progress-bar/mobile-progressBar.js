import React from "react";
import {
  CircleBox,
  SemiCircle,
  SemiCircleTwo,
  IdoImg,
  ProgressRocket,
  ProgressWrapper,
} from "./progress.style";
import styled from "styled-components";
import rocketImg from "../../../img/progress-rocket.svg";

const GradientBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 119px;
  height: 119px;
  border-radius: 50%;
  background: linear-gradient(
    0deg,
    rgba(219, 72, 59, 1) 0%,
    rgba(245, 175, 25, 1) 100%
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

const MobileProgressBar = ({image, percentage}) => {
  return (
    <ProgressWrapper>
      <ProgressRocket src={rocketImg} />
      <CircleBox>
        <TransparentBackground />
        <GradientBackground />
        <IdoImg src={image} />
        <SemiCircle percent={percentage} />
        <SemiCircleTwo percent={percentage} />
      </CircleBox>
    </ProgressWrapper>
  );
};

export default MobileProgressBar;
