import styled from "styled-components";
import Image from "next/image";

export const PreviewContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledPreviewImage = styled(Image)`
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const StyledPreviewText = styled.p`
  color: green;
  margin: 5px;
`;

export const StyledDeletePreviewButton = styled.button`
  margin: 10px;
  background-color: white;
  padding: 10px 35px;
  font-size: 12px;
  border-style: none;
  border-radius: 8px;
`;
