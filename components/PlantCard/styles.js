import Link from "next/link";
import styled from "styled-components";

export const Card = styled.article`
  position: relative;
  margin-top: 20px;
  height: 55vw;
  width: 90vw;
  border-radius: 15px;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  img {
    object-fit: cover;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;

  background: rgb(0, 0, 0);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.603988603988604) 0%,
    rgba(0, 0, 0, 0) 50%
  );
  width: 100%;
  height: 100%;
`;

export const CardPlantName = styled.h3`
  padding-left: 20px;
  margin-bottom: 0;
  color: white;
  text-align: left;
`;

export const CardBotanicalPlantName = styled.h4`
  padding-left: 20px;
  margin-top: 5px;
  font-size: 14px;
  color: white;
  font-weight: 300;
  text-align: left;
`;

export const DetailsLink = styled(Link)`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 0;
  text-decoration: none;
  color: white;
`;
