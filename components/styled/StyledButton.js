import styled, { css } from "styled-components";

export const CreateWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /*   margin: 10px; */
  background-color: white;
  cursor: pointer;
  padding: 10px 35px;
  font-size: 18px;
  border: 1px solid;
  border-radius: 8px;

  ${({ $variant }) =>
    $variant === "indexButton" &&
    css`
      padding: 5px;
      margin: 0 2px;
    `}

  ${({ $variant }) =>
    $variant === "resetButton" &&
    css`
      margin-top: 10px;
      display: flex;
      justify-content: center;
    `}
    
      ${({ $variant, $isEditMode }) => {
    if ($variant === "update" && $isEditMode) {
      return css`
        background-color: rgba(164, 211, 110, 1);
        color: white;
        border: 1px solid rgba(164, 211, 110, 1);
        margin-right: 10px;
      `;
    } else if ($variant === "delete") {
      return css`
        background-color: firebrick;
        color: white;
        border: 1px solid firebrick;
        margin-right: 10px;
      `;
    }
  }}
`;
