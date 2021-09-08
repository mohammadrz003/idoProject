import styled from "styled-components";
import { mediaQueries } from "../../../mediaQueries";

export const WhitePaperWrapper = styled.div``;

export const PaperImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  ${mediaQueries("md")`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const PaperItem = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQueries("md")`
    width: calc(50% - 30px);
    margin-bottom: 0;
    margin: 15px 15px;

    &:last-child {
    margin-bottom: 15px;
  }
  `}

  ${mediaQueries("lg")`
    width: calc(33.33% - 30px);
    margin-bottom: 0;
    margin: 15px 15px;

    &:last-child {
    margin-bottom: 15px;
  }
  `}

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
