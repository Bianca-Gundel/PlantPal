import { StyledButton } from "../styled/StyledButton";
import React, { useState } from "react";
import { StyledHeadline } from "../styled/StyledHeadline";
import { StyledFormWrapper } from "../styled/StyledFormWrapper";

const lightOptions = [
  { id: "lightNeed1", value: "Full Sun", label: "Full Sun" },
  { id: "lightNeed2", value: "Partial Shade", label: "Partial Shade" },
  { id: "lightNeed3", value: "Full Shade", label: "Full Shade" },
];

const waterOptions = [
  { id: "waterNeed1", value: "Low", label: "Low" },
  { id: "waterNeed2", value: "Medium", label: "Medium" },
  { id: "waterNeed3", value: "High", label: "High" },
];

const fertiliserOptions = [
  { id: "fertiliserSeason1", value: "Summer", label: "Summer" },
  { id: "fertiliserSeason2", value: "Spring", label: "Spring" },
  { id: "fertiliserSeason3", value: "Autumn", label: "Autumn" },
  { id: "fertiliserSeason4", value: "Winter", label: "Winter" },
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
              checked={selectedFilter.lightNeed === option.value}
              onChange={(event) => onFilterValue(event.target)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </section>

      <label>
        <h3>Water Needs:</h3>
      </label>
      <section>
        {waterOptions.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              id={option.id}
              name="waterNeed"
              value={option.value}
              checked={selectedFilter.waterNeed === option.value}
              onChange={(event) => onFilterValue(event.target)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </section>

      <label>
        <h3>Fertiliser Season:</h3>
      </label>

      <section>
        {fertiliserOptions.map((option) => (
          <div key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name="fertiliserSeason"
              value={option.value}
              checked={selectedFilter.fertiliserSeason.includes(option.value)}
              onChange={(event) => onFilterValue(event.target)}
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
