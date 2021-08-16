import styled from "styled-components";

export const JoinModal = styled.div`
  background-color: #222421;
  color: #ffffff;
`;

export const RadioGroupItemWrapper = styled.div`
  background: rgb(255, 135, 2);
  background: linear-gradient(
    90deg,
    rgba(255, 135, 2, 1) 0%,
    rgba(255, 0, 196, 1) 72%
  );
  padding: 2px;
`;

export const PoolInputValue = styled.input`
  color: #000000;
  width: 100%;
  padding: 0.85rem 1.25rem;
  font-size: 1.1rem;
  border-radius: 0.25rem;
  font-weight: 500;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const JoinNowButton = styled.button`
  padding: 0.9rem 1.25rem;
  width: 100%;
  background: rgb(255, 135, 2);
  background: linear-gradient(
    90deg,
    rgba(255, 135, 2, 1) 0%,
    rgba(255, 0, 196, 1) 72%
  );
`;
