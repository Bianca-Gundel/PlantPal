import { useState } from "react";
import { StyledOptionButton } from "../styled/StyledOptionButton";
import styled from "styled-components";
import Image from "next/image";

// Wrapper für die Checkbox-Optionen (Abstand zwischen Button etc)

const OptionWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

// State um ausgewählte Checkbox zu verfolgen,
// Event-Handler für Änderungen an einer Checkbox
// Prüfung, ob Checkbox ausgewählt ist (Ja: enfernen, nein: hinzufügen)

export const CheckboxOption = ({ options, name, initialValues = [] }) => {
  const [selectedValues, setSelectedValues] = useState(initialValues);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValues((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

  return (
    <OptionWrapper>
      {/* Mapping durch die Optionen, um Checkboxen zu rendern */}
      {options.map((option) => (
        <StyledOptionButton
          key={option.id}
          htmlFor={option.id}
          checked={selectedValues.includes(option.value)} // Dynamisches Styling basierend auf checked
        >
          {/* Verstecktes input-Element für die eigentliche Checkbox */}
          <input
            type="checkbox"
            id={option.id}
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)} // Checkbox-Status
            onChange={handleChange} // Event-Handler für Änderungen
            style={{ display: "none" }} // Unsichtbar, Styling über StyledOptionButton
          />
          {/* SVG-Icon anzeigen, falls vorhanden */}
          {option.icon && (
            <Image
              src={`/icons/${option.icon}`} // Icon aus dem Public-Ordner laden
              width={20}
              height={20}
              alt={option.label} // Barrierefreiheit: Beschreibung des Icons
            />
          )}
          {/* Text-Label für die Checkbox */}
          {option.label}
        </StyledOptionButton>
      ))}
    </OptionWrapper>
  );
};
