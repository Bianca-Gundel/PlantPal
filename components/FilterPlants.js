import { styled, css } from "styled-components";
import { StyledButton } from "./StyledButton";
import React from "react";

const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  ${css`
    input[type="text"] {
      width: 100%;
      padding: 15px;
      border-style: none;
      border-radius: 10px;
    }

    h3 {
      margin-bottom: 10px;
    }
    section {
      display: flex;
      flex-direction: row;
      justify-content: start;
    }
    label {
      /* FYI: genaue Anpassung in einer späteren User-Story (nach Wahl der Schriftart, Größe, etc.) */
      margin-right: 15px;
    }

    input {
      margin: 0 5px 0 0;
    }

    div.button {
      margin-top: 15px;
      display: flex;
      justify-content: center;
    }
  `}
`;

const lightOptions = [
  { id: "lightNeed1", value: "Full Sun", label: "Full Sun" },
  { id: "lightNeed2", value: "Partial Shade", label: "Partial Shade" },
  { id: "lightNeed3", value: "Full Shade", label: "Full Shade" },
];

export default function FilterPlants({
  onFilterValue,
  onResetFilter,
  selectedFilter,
}) {
  console.log(selectedFilter);

  return (
    <>
      <StyledFormWrapper>
        <label>
          <h3>Light Needs:</h3>
        </label>
        {lightOptions.map((option) => (
          <React.Fragment key={option.id}>
            <input
              type="radio"
              id={option.id}
              name="lightNeed"
              value={option.value}
              checked={selectedFilter === option.value}
              onChange={(event) => onFilterValue(event.target.value)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </React.Fragment>
        ))}
      </StyledFormWrapper>
      <button type="button" onClick={onResetFilter}>
        Reset
      </button>
    </>
  );
}
