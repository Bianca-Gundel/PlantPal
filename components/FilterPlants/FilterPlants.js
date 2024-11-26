import { StyledButton } from "../styled/StyledButton";
import React from "react";
import {
  StyledHeadlineH2,
  BaseH3,
  BaseH5,
  BaseH2,
} from "../styled/StyledHeadline";
import { StyledFormWrapper } from "../styled/StyledFormWrapper";
import { StyledCheckboxSection, StyledCheckboxWrapper } from "./styles";
import Image from "next/image";

const lightOptions = [
  {
    id: "lightNeed1",
    value: "Full Sun",
    label: "Full Sun",
    icon: "sun-full.svg",
  },
  {
    id: "lightNeed2",
    value: "Partial Shade",
    label: "Partial Shade",
    icon: "sun-half.svg",
  },
  {
    id: "lightNeed3",
    value: "Full Shade",
    label: "Full Shade",
    icon: "sun.svg",
  },
];

const waterOptions = [
  { id: "waterNeed1", value: "Low", label: "Low", icon: "drop.svg" },
  {
    id: "waterNeed2",
    value: "Medium",
    label: "Medium",
    icon: "drop-half.svg",
  },
  { id: "waterNeed3", value: "High", label: "High", icon: "drop-full.svg" },
];

const fertiliserOptions = [
  {
    id: "fertiliserSeason1",
    value: "Summer",
    label: "Summer",
    icon: "sun-full.svg",
  },
  {
    id: "fertiliserSeason2",
    value: "Spring",
    label: "Spring",
    icon: "spring.svg",
  },
  { id: "fertiliserSeason3", value: "Fall", label: "Fall", icon: "fall.svg" },
  {
    id: "fertiliserSeason4",
    value: "Winter",
    label: "Winter",
    icon: "winter.svg",
  },
];

export default function FilterPlants({
  onFilterValue,
  onResetFilter,
  selectedFilter,
}) {
  function handleCheckbox(event) {
    const target = event.target;
    const name = event.target.name;

    if (selectedFilter[name] === target.value) {
      target.checked = false;
      onFilterValue({
        name: target.name,
        value: "",
      });
    } else {
      onFilterValue(target);
    }
  }

  return (
    <StyledFormWrapper>
      <BaseH2>Filter</BaseH2>
      <label>
        <BaseH5>Light Needs:</BaseH5>
      </label>
      <StyledCheckboxSection>
        {lightOptions.map((option) => (
          <StyledCheckboxWrapper key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name="lightNeed"
              value={option.value}
              checked={selectedFilter.lightNeed === option.value}
              onChange={handleCheckbox}
            />
            <label htmlFor={option.id}>
              {option.icon && (
                <Image
                  src={`/icons/${option.icon}`}
                  width={15}
                  height={15}
                  alt={option.label}
                />
              )}
              {option.label}
            </label>
          </StyledCheckboxWrapper>
        ))}
      </StyledCheckboxSection>

      <label>
        <BaseH5>Water Needs:</BaseH5>
      </label>
      <StyledCheckboxSection>
        {waterOptions.map((option) => (
          <StyledCheckboxWrapper key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name="waterNeed"
              value={option.value}
              checked={selectedFilter.waterNeed === option.value}
              onChange={handleCheckbox}
            />
            <label htmlFor={option.id}>
              <Image
                src={`/icons/${option.icon}`}
                width={15}
                height={15}
                alt={option.label}
              />
              {option.label}
            </label>
          </StyledCheckboxWrapper>
        ))}
      </StyledCheckboxSection>

      <label>
        <BaseH5>Fertiliser Season:</BaseH5>
      </label>

      <StyledCheckboxSection>
        {fertiliserOptions.map((option) => (
          <StyledCheckboxWrapper key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name="fertiliserSeason"
              value={option.value}
              checked={selectedFilter.fertiliserSeason.includes(option.value)}
              onChange={(event) => onFilterValue(event.target)}
            />
            <label htmlFor={option.id}>
              <Image
                src={`/icons/${option.icon}`}
                width={15}
                height={15}
                alt={option.label}
              />
              {option.label}
            </label>
          </StyledCheckboxWrapper>
        ))}
      </StyledCheckboxSection>

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
