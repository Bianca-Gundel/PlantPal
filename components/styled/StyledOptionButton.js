import styled from "styled-components";

export const StyledOptionButton = styled.label`
  padding: 8px 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? "#d1f7c4" : "transparent")};
  color: ${(props) => (props.checked ? "#000" : "#666")};
  display: inline-block;
  text-align: center;

  &:hover {
    border-color: #000;
  }
`;
