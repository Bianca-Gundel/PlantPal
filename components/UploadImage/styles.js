import styled from "styled-components";

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledUploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px dashed #6d7887;
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  width: 100%;
`;

export const HiddenInput = styled.input`
  display: none;
`;
