import styled from "styled-components";

export const StyledFilterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
`;

export const FilterCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: green;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  display: ${(props) => (props.$count > 0 ? "flex" : "none")};
`;
