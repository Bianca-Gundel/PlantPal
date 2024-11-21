import { useState } from "react";
import { StyledOptionButton } from "../styled/StyledOptionButton";
import styled from "styled-components";

const OptionWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const RadioOption = ({ options, name, initialValue }) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <OptionWrapper>
      {options.map((option) => (
        <StyledOptionButton
          key={option.id}
          htmlFor={option.id}
          checked={selectedOption === option.value}
        >
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            required
            checked={selectedOption === option.value}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          {option.label}
        </StyledOptionButton>
      ))}
    </OptionWrapper>
  );
};
