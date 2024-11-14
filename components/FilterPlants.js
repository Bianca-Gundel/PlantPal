import { styled, css } from "styled-components";
import { StyledButton } from "./StyledButton";
import React from "react";
import { StyledHeadline } from "./StyledHeadline";
import { StyledFormWrapper } from "./StyledFormWrapper";

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
          <div key={option.id}>
            <input
              type="radio"
              id={option.id}
              name="lightNeed"
              value={option.value}
              checked={selectedFilter === option.value}
              onChange={(event) => onFilterValue(event.target.value)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
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
