import styled from "styled-components";

export const StyledHeadlineH1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  // Bloom Buddy Titel
`;

export const StyledHeadlineH2 = styled.h2`
  font-weight: 700;
  font-size: 22px;
  word-break: break-word;
  hyphens: auto;
  margin-bottom: 20px;
  margin-top: 5px;
  // Page Überschrift
`;

export const BaseH1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
`;

export const BaseH2 = styled.h2`
  font-weight: 700;
  font-size: 22px;
  word-break: break-word;
  hyphens: auto;
  margin-bottom: 20px;
  margin-top: 5px;
  // Überschriften auf Page
`;

export const BaseH3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: red;
  // Headline Pflanzen
`;

export const DetailsPageH3 = styled(BaseH3)`
  word-break: break-word;
  hyphens: auto;
  margin-top: 10px;
`;

export const PlantCardH3 = styled(BaseH3)`
  padding-left: 20px;
  margin-bottom: 0;
  margin-top: 15px;
  text-align: left;
`;

export const BaseH4 = styled.h4`
  font-weight: 300;
  font-size: 16px;
  color: blue;
  // Subline Pflanzen
`;

export const PlantCardH4 = styled(BaseH4)`
  padding-left: 20px;
  margin-top: 2px;
  text-align: left;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const DetailsPageH4 = styled(BaseH4)`
  word-break: break-word;
  hyphens: auto;
  margin-bottom: 20px;
  margin-top: 5px;
`;

export const BaseH5 = styled.h5`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
  // Formular
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledHeadlineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 60%;
`;
