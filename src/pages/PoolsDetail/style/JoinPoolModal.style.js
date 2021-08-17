import styled from "styled-components";

export const ModalBlackBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
  z-index: 40;
`;

export const JoinModal = styled.div`
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
