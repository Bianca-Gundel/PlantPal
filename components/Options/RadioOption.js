import { useState } from "react";
import { StyledOptionButton } from "../styled/StyledOptionButton";
import styled from "styled-components";
import Image from "next/image";

// Wrapper für die Radio-Optionen (Abstand zwischen Buttons etc)
const OptionWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

// Verfolgung des ausgewählten Werts und Aktualisierung des Status beim Auswählen
export const RadioOption = ({ options, name, initialValue }) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <OptionWrapper>
      {options.map((option) => (
        // Button-Komponente mit dynamischem Styling je nach checked-Status
        <StyledOptionButton
          key={option.id}
          htmlFor={option.id}
          checked={selectedOption === option.value}
        >
          {/* Verstecktes input-Element */}
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            required
            checked={selectedOption === option.value}
            onChange={handleChange}
            style={{ display: "none" }} // Unsichtbar, Styling wird über StyledOptionButton gehandhabt
          />
          {/* Anzeige des Icons */}
          {option.icon && (
            <Image
              src={`/icons/${option.icon}`}
              width={20}
              height={20}
              alt={option.label}
            />
          )}
          {option.label}
        </StyledOptionButton>
      ))}
    </OptionWrapper>
  );
};
