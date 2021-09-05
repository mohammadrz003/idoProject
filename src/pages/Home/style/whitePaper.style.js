import styled from "styled-components";
import { mediaQueries } from "../../../mediaQueries";

export const WhitePaperWrapper = styled.div``;

export const PaperImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  ${mediaQueries("lg")`
    flex-direction: row;
  `}
`;

export const PaperItem = styled.div`
  height: 280px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 46, 99);
    background: linear-gradient(0deg, #222831 0%, transparent 60%);
    opacity: 0.8;
  }

  &:hover {
    filter: opacity(0.8);
  }
`;

export const PaperItemTitle = styled.h4`
  position: absolute;
  bottom: 32px;
  left: 32px;
  font-weight: 600;
  color: #f7f7f7;
  font-size: 17px;
`;
