import styled from "styled-components";

// Dynamisches Styling für jeden Button

export const StyledOptionButton = styled.label`
  font-size: 14px;
  padding: 10px 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ checked }) => (checked ? "#68726B" : "#FFFFFF")};
  color: ${({ checked }) => (checked ? "#FFFFFF" : "#000000")};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-align: center;
  transition: filter 0.3s ease;

  &:hover {
    border-color: #000;
  }

  img {
    filter: ${({ checked }) => (checked ? "invert(1)" : "invert(0)")};
    transition: filter 0.3s ease;
  }
`;

/* 

Die filter-CSS-Eigenschaft erlaubt es, visuelle Effekte auf Bilder anzuwenden, 
ohne die ursprüngliche Bilddatei zu ändern.

invert(0) = keine Invertierung > weiß
invert(1) = komplett invertiert > schwarz

Wenn checked false ist, bleibt das Icon normal (invert(0) > Weiß)
Wenn checked true ist, wird das Icon invertiert (invert(1) > Schwarz)

*/
