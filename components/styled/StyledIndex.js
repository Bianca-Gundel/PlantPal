import styled, { css } from "styled-components";

export const StyledErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

export const ArrowIcon = styled.span`
  display: inline-flex;
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.$isRotated &&
    css`
      transform: rotate(180deg);
    `}
`;

export const FlexboxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
