import styled from "styled-components";
import { mediaQueries } from "../../mediaQueries";

export const PoolItem = styled.li``;

export const Status = styled.div``;

export const PhoneIdoHeader = styled.p`
  background: rgb(14, 210, 247);
  background: ${(props) =>
    props.darkMode === "dark"
      ? `linear-gradient(
  8deg,
  rgba(14, 210, 247, 1) 0%,
  rgba(178, 254, 250, 1) 100%
)`
      : "#00b4d8"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;