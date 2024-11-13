import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: white;
  cursor: pointer;
  padding: 10px 35px;
  font-size: 18px;

  border-style: none;
  border-radius: 8px;

  ${({ $variant }) =>
    $variant === "delete" &&
    css`
      background-color: firebrick;
      color: white;
    `}

  ${({ $variant }) =>
    $variant === "indexButton" &&
    css`
      padding: 5px;
      margin: 0 2px;
    `}
`;
