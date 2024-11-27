import Link from "next/link";
import styled from "styled-components";

export const Card = styled.article`
  position: relative;
  margin-top: 20px;
  height: 55vw;
  width: 90vw;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
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

export const CardBotanicalPlantName = styled.h4`
  font-weight: 300;
  font-size: 16px;
  padding-left: 20px;
  margin-top: 2px;
  color: white;
  text-align: left;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const DetailsLink = styled(Link)`
  background-color: rgba(109, 120, 135, 0.6);
  padding: 10px 0;
  text-decoration: none;
  color: white;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;
