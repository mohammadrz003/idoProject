import styled from "styled-components";
import { mediaQueries } from "../../../mediaQueries";

export const DetailWrapper = styled.div`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0;

  ${mediaQueries("lg")`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const RocketBackground = styled.img`
  position: absolute;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageSection = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-start;
  border-radius: 8px;

  ${mediaQueries("lg")`
    width: 33%;
    position: sticky;
    top: 5%;
  `}
`;

export const ListSection = styled.div`
  width: 100%;
  margin-top: 3rem;

  ${mediaQueries("lg")`
    width: 66%;
    margin-top: 0;
  `}
`;

export const JoinButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const SummaryDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
`;

export const AddressInput = styled.input`
  background-color: transparent;
  width: 5.5rem;

  &:focus {
    border: none;
    outline: none;
  }
`;
