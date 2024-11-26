import styled, { css } from "styled-components";

export const StyledPlantDescription = styled.p`
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

export const IconsWrapper = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-evenly;
  align-items: center;
`;

export const InnerIconWrapper = styled.div`
  width: 25%;
  height: 100px;
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

export const ImageBorder = styled.article`
  position: relative;
  margin-top: 20px;
  height: 55vw;
  width: 90vw;
  border-radius: 15px;
  overflow: hidden;
  margin: auto;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  right: 40px;
  top: 70px;
`;
