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

  ${({ $variant, $isEditMode }) => {
    if ($variant === "update" && $isEditMode) {
      return css`
        background-color: rgba(164, 211, 110, 1);
        color: white;
      `;
    } else if ($variant === "delete") {
      return css`
        background-color: firebrick;
        color: white;
      `;
    }
  }}
`;