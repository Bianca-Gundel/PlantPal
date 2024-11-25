import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { StyledOptionButton } from "./StyledOptionButton";

const OptionWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CheckboxOption = ({
  options,
  name,
  initialValues = [],
  onChange,
}) => {
  const [selectedValues, setSelectedValues] = useState(initialValues);

  const handleChange = (event) => {
    const value = event.target.value;
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    setSelectedValues(updatedValues);
    if (onChange) {
      onChange(updatedValues); // Gibt die aktualisierten Werte an die Parent-Komponente zurück
    }
  };

  return (
    <OptionWrapper>
      {options.map((option) => (
        <StyledOptionButton
          key={option.id}
          htmlFor={option.id}
          checked={initialValues.includes(option.value)}
        >
          <input
            type="checkbox"
            id={option.id}
            name={name}
            value={option.value}
            checked={initialValues.includes(option.value)} // Bindung an initialValues
            onChange={() => {
              const updatedValues = initialValues.includes(option.value)
                ? initialValues.filter((item) => item !== option.value)
                : [...initialValues, option.value];
              onChange(updatedValues); // Aktualisiere Parent-Zustand
            }}
            style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}
          />
          {option.icon && (
            <Image
              src={`/icons/${option.icon}`}
              width={15}
              height={15}
              alt={option.label}
            />
          )}
          {option.label}
        </StyledOptionButton>
      ))}
    </OptionWrapper>
  );
};
