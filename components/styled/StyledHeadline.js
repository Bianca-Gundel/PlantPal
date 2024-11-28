import styled from "styled-components";

export const BaseH1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
`;

export const BaseH2 = styled.h2`
  font-weight: 700;
  font-size: 28px;
  word-break: break-word;
  hyphens: auto;
  margin-top: 10px;
`;

export const BaseH3 = styled.h3`
  font-weight: 700;
  font-size: 22px;
  color: white;
`;

export const DetailsPageH3 = styled(BaseH3)`
  word-break: break-word;
  hyphens: auto;
  margin-top: 10px;
  color: black;
`;

export const PlantCardH3 = styled(BaseH3)`
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.3);

  padding-left: 20px;
  margin-bottom: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  text-align: left;
`;

export const BaseH4 = styled.h4`
  font-weight: 200;
  font-size: 15px;
  color: white;
`;

export const PlantCardH4 = styled(BaseH4)`
  padding-left: 20px;
  margin-top: 2px;
  text-align: left;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.7);
`;

export const DetailsPageH4 = styled(BaseH4)`
  word-break: break-word;
  hyphens: auto;
  margin-bottom: 20px;
  margin-top: 5px;
  color: black;
`;

export const BaseH5 = styled.h5`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const FilterFormH5 = styled(BaseH5)`
  margin-bottom: 5px;
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
