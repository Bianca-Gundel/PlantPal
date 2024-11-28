import Image from "next/image";
import styled from "styled-components";

export const StyledPlantDescription = styled.p`
  width: 90%;
  text-align: center;
  margin: 20px auto;
  word-break: break-word;
  hyphens: auto;
`;

export const IconsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const InnerIconWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  display: flex;
  height: 30%;
  align-self: center;
`;

export const StyledIconText = styled.div`
  display: flex;
  height: 70%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const PlantImage = styled(Image)`
  object-fit: cover;
`;

export const ImageBorder = styled.article`
  position: relative;
  margin-top: 20px;
  height: 55vw;
  width: 90vw;
  border-radius: 15px;
  overflow: hidden;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  margin: auto;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20px;
`;

export const StyledEditButton = styled.button`
  border-style: none;
  border-radius: 50px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 18px;
  top: 30px;
  background-color: white;
`;
