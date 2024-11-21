import { styled, css } from "styled-components";

export const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  ${css`
    input[type="text"] {
      width: 100%;
      padding: 15px;
      border-style: none;
      border-radius: 10px;
    }
    textarea {
      width: 100%;
      padding: 15px;
      resize: vertical;
      border-style: none;
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
    label {
      margin-right: 15px;
    }

    input {
      margin: 0 5px 0 0;
    }

    div {
      margin-top: 10px;
      display: flex;
    }

    div.button {
      margin-top: 15px;
      display: flex;
      justify-content: center;
    }
  `}
`;
