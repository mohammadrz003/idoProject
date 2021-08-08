import styled from "styled-components";

export const ProgressWrapper = styled.div`
  position: relative;
  //transform: translate(15px, 0) rotate(45deg);
`

export const RocketBox = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  transform: translate(0, 100%) rotate(${props => props.percent * 3.6}deg);
  z-index: 20;
  transition: all 2.5s linear;
`

export const ProgressRocket = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(0, -6px) rotate(90deg);
  width: 14px;
  z-index: 20;
`

export const CircleBox = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
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
`

export const SemiCircle = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 100%;
  overflow: hidden;
  --percentage: ${(props => (props.percent >= 50 ? (props.percent - 50) * 2 : 0))};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 120px;
    border: 10px solid;
    border-color: #495057 transparent transparent #495057;
    border-radius: 50%;
    transform: rotate(calc(1deg * (-45 + (var(--percentage) * 1.8))));
    transition-property: all;
    transition-duration: 2s;
    transition-delay: 2s;
    transition-timing-function: linear;
  }
`;

export const SemiCircleTwo = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 100%;
  overflow: hidden;
  --percentage: ${(props => (props.percent >= 50 ? 100 : props.percent * 2))};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 120px;
    border: 10px solid;
    border-color: transparent #495057 #495057 transparent;
    border-radius: 50%;
    transform: translate(-50%, 0) rotate(calc(1deg * (-45 + (var(--percentage) * 1.8))));
    transition: all 2s linear;
  }
`;
