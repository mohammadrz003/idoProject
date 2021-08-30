import styled from "styled-components";

export const ProgressWrapper = styled.div`
  position: relative;
`;

export const RocketBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 72px;
  height: 72px;
  transform: rotate(${(props) => props.percent * 3.6}deg);
  z-index: 20;
  transition-property: all;
  transition-duration: ${(props) => 4000 * (props.percent / 100)}ms;
  transition-timing-function: linear;
`;

export const ProgressRocket = styled.img`
  transform: translate(0, -3.5px) rotate(90deg);
  width: 8px;
  z-index: 20;
`;

export const CircleBox = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
`;

export const IdoImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  border-radius: 50%;
  z-index: 5;
`;

export const SemiCircle = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 100%;
  overflow: hidden;
  --percentage: ${(props) =>
    props.percent >= 50 ? (props.percent - 50) * 2 : 0};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    border: 5px solid;
    border-color: ${(props) => props.darkMode === "dark" || props.poolsPage ? "#495057 transparent transparent #495057" : "#bfc0c0 transparent transparent #bfc0c0"};
    border-radius: 50%;
    transform: rotate(calc(1deg * (-45 + (var(--percentage) * 1.8))));
    transition-property: all;
    transition-duration: ${(props) =>
      props.percent >= 50 ? 2000 * (((props.percent - 50) * 2) / 100) : 0}ms;
    transition-delay: ${(props) =>
      props.percent >= 50 ? 4000 * (50 / 100) : 4000 * (props.percent / 100)}ms;
    transition-timing-function: linear;
  }
`;

export const SemiCircleTwo = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 100%;
  overflow: hidden;
  --percentage: ${(props) => (props.percent >= 50 ? 100 : props.percent * 2)};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    border: 5px solid;
    border-color: ${(props) => props.darkMode === "dark" || props.poolsPage ? "transparent #495057 #495057 transparent" : "transparent #bfc0c0 #bfc0c0 transparent"};
    border-radius: 50%;
    transform: translate(-50%, 0)
      rotate(calc(1deg * (-45 + (var(--percentage) * 1.8))));
    transition-property: all;
    transition-duration: ${(props) =>
      props.percent >= 50 ? 4000 * (50 / 100) : 4000 * (props.percent / 100)}ms;
    transition-timing-function: linear;
  }
`;

export const GradientBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 71px;
  height: 71px;
  border-radius: 50%;
  background: rgb(241, 145, 67);
  background: linear-gradient(
    312deg,
    rgba(241, 145, 67, 1) 0%,
    rgba(255, 119, 61, 1) 50%,
    rgba(245, 85, 54, 1) 100%
  );
`;

export const TransparentBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.darkMode === "dark" || props.poolsPage ? "#141A34" : "#ffffff"};
  z-index: 3;
`;
