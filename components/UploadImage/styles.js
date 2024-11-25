import styled from "styled-components";

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const StyledUploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  border: 1px dashed #d1d5db;
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  width: 100%;
`;

export const HiddenInput = styled.input`
  display: none;
`;
