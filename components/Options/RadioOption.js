import { StyledOptionButton } from "./StyledOptionButton";
import styled from "styled-components";
import Image from "next/image";

const OptionWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const RadioOption = ({ options, name, initialValue, onChange }) => {
  return (
    <OptionWrapper>
      {options.map((option) => (
        <StyledOptionButton
          key={option.id}
          htmlFor={option.id}
          checked={initialValue === option.value}
        >
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            checked={initialValue === option.value}
            onChange={() => onChange(option.value)}
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
