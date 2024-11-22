import styled from "styled-components";

export const StyledOptionButton = styled.label`
  font-size: 14px;
  padding: 10px 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ checked }) => (checked ? "#68726B" : "#FFFFFF")};
  color: ${({ checked }) => (checked ? "#FFFFFF" : "#000000")};
  display: inline-block;
  text-align: center;

  &:hover {
    border-color: #000;
  }
`;
