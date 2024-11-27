import styled from "styled-components";

export const StyledOptionButton = styled.label`
  font-size: 12px;
  padding: 10px 10px;
  border: 1px solid ${({ checked }) => (checked ? "#000000" : "#000000")};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ checked }) => (checked ? "#000000" : "#FFFFFF")};
  color: ${({ checked }) => (checked ? "#FFFFFF" : "#000000")};
  display: flex;
  align-items: center;
  gap: 5px;
  text-align: center;
  transition: all 0.3s ease;
  margin-right: 1px;

  img {
    filter: ${({ checked }) => (checked ? "invert(1)" : "invert(0)")};
    transition: filter 0.3s ease;
  }

  input {
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }
`;
