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
      /* FYI: genaue Anpassung in einer späteren User-Story (nach Wahl der Schriftart, Größe, etc.) */
      margin-right: 5px;
    }

    input {
      margin: 0 5px 0 0;
    }

    div {
      margin-top: 15px;
      display: flex;
      justify-content: center;
    }

    div.button {
      margin-top: 15px;
      display: flex;
      justify-content: center;
    }
  `}
`;
