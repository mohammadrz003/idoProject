import styled from "styled-components";

export const CircleBox = styled.div`
  width: 150px;
  height: 150px;
  //transform: rotate(60deg);
`;

export const SemiCircle = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 150px;
  overflow: hidden;
  --percentage: ${(props => (props.percent * -1))};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    border: 15px solid;
    border-color: #495057 #00cecb #00cecb #495057;
    border-radius: 50%;
    transform: rotate(calc(1deg * (-45 + (var(--percentage) * 1.8))));
  }
`;

export const SemiCircleTwo = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 150px;
  overflow: hidden;
  --percentage: ${(props => (props.percent))};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    border: 15px solid;
    border-color: #00cecb #495057 #495057 #00cecb;
    border-radius: 50%;
    transform: translate(-50%, 0) rotate(calc(1deg * (-45 + (var(--percentage) * 1.8))));
  }
`;
