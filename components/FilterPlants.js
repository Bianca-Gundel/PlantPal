import { styled, css } from "styled-components";
import { StyledButton } from "./StyledButton";
import React from "react";
import { StyledHeadline } from "./StyledHeadline";

const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  ${css`
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

    div {
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
  return (
    <StyledFormWrapper>
      <StyledHeadline>Filter</StyledHeadline>
      <label>
        <h3>Light Needs:</h3>
      </label>
      <section>
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
      </section>

      {/* FYI: div is needed for design - we will fix this later in another US */}
      <div>
        <StyledButton
          type="button"
          $variant="resetButton"
          onClick={onResetFilter}
        >
          Reset
        </StyledButton>
      </div>
    </StyledFormWrapper>
  );
}
