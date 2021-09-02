import styled from "styled-components";

export const PoolTitle = styled.h2`
  &:before {
    display: ${(props) => props.useDarkMode === "dark" ? "none" : "initial"};
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(64deg);
    background-color: #ffe000;
    width: 40px;
    height: 40px;
    z-index: 2;
    border-radius: 8px;
  }
`;

export const ProgressFire = styled.img`
  transform: translate(-55%, -32%) rotate(90deg);
  width: 16px;
`;

export const ProgressPercent = styled.span`
  transform: translate(-40%, -37%);
`;
