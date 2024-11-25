import styled, { css } from "styled-components";

export const StyledPlantDescription = styled.p`
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

export const IconsContainer = styled.article`
  display: flex;
  justify-content: space-around;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageBorder = styled.article`
  position: relative;
  margin-top: 20px;
  height: 55vw;
  width: 90vw;
  border-radius: 15px;
  overflow: hidden;
  margin: auto;
  img {
    object-fit: cover;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${css`
    p {
      width: 100%;
    }

    button {
      margin: 10px;
    }
  `}
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
