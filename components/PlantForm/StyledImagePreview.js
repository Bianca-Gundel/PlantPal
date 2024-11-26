import styled from "styled-components";
import Image from "next/image";

export const PreviewContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 250px;
  aspect-ratio: 16 / 9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPreviewImage = styled(Image)`
  object-fit: cover;
  border-radius: 0.5rem;
  position: relative;
  z-index: 1;
`;

export const StyledDeletePreviewButton = styled.button`
  position: absolute;
  top: 64rem;
  right: 4.5rem;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: #000;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;
