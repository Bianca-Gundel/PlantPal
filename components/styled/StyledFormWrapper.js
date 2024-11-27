import { styled, css } from "styled-components";

export const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding-bottom: 10px;

  ${css`
    input[type="text"] {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 10px;
    }
    textarea {
      width: 100%;
      padding: 15px;
      resize: vertical;
      border: none;
      border-radius: 10px;
      font-family: Arial, Helvetica, sans-serif;
    }
    h3 {
      margin-bottom: 10px;
    }
    section {
      display: flex;
      flex-direction: row;
      justify-content: start;
    }

    div {
      margin-top: 10px;
      display: flex;
    }

    p {
      color: green;
      font-weight: bold;
    }
  `}
`;
