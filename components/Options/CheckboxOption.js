import { useState } from "react";
import { StyledOptionButton } from "../styled/StyledOptionButton";
import styled from "styled-components";
import Image from "next/image";

const OptionWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

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
      {options.map((option) => (
        <StyledOptionButton
          key={option.id}
          htmlFor={option.id}
          checked={selectedValues.includes(option.value)}
        >
          <input
            type="checkbox"
            id={option.id}
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={handleChange}
            style={{ display: "none" }}
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
