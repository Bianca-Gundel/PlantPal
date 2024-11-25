import styled from "styled-components";

export const StyledOptionButton = styled.label`
  font-size: 12px;
  padding: 10px 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ checked }) => (checked ? "#68726B" : "#FFFFFF")};
  color: ${({ checked }) => (checked ? "#FFFFFF" : "#000000")};
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;
  transition: all 0.3s ease;

  img {
    filter: ${({ checked }) => (checked ? "invert(1)" : "invert(0)")};
    transition: filter 0.3s ease;
  }
`;
