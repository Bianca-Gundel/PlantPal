import { styled, css } from "styled-components";

export const StyledCheckboxWrapper = styled.div`
  label {
    font-size: 12px;
    padding: 10px 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: center;
    transition: all 0.3s ease;
  }

  input {
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }

  input:checked + label {
    background-color: #68726b;
    color: #ffffff;

    img {
      filter: invert(1);
    }
  }
`;

export const StyledCheckboxSection = styled.section`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;
