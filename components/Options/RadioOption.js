import { useState } from "react";
import { StyledOptionButton } from "./StyledOptionButton";
import styled from "styled-components";
import Image from "next/image";

const OptionWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const RadioOption = ({ options, name, initialValue, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onChange) {
      onChange(value); // Gibt den neuen Wert an die Parent-Komponente zurück
    }
  };

  return (
    <OptionWrapper>
      {options.map((option) => (
        <StyledOptionButton
          key={option.id}
          htmlFor={option.id}
          checked={initialValue === option.value} // Bindung an initialValue
        >
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            checked={initialValue === option.value} // Bindung an initialValue
            onChange={() => onChange(option.value)} // Aktualisiert Parent-Zustand
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
