import styled from "styled-components";

export const StyledToggleBookmark = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 0 0 5px 5px;
  background-color: rgba(109, 120, 135, 0.6);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export const StyledToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 20px;
  position: absolute;
  z-index: 2;

  img {
    filter: invert(100%);
  }
`;
