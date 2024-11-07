import styled, { css } from "styled-components";
import { StyledButton } from "./StyledButton";

const StyledFormWrapper = styled.form`
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
      /* genaue Anpassung in einer späteren User-Story (nach Wahl der Schriftart, Größe, etc.) */
      margin-right: 15px;
    }

    input {
      margin: 0 5px 0 0;
    }

    div.button {
      margin-top: 15px;
      display: flex;
      justify-content: center;
    }
  `}
`;

export default function PlantForm({ onCreatePlant }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.fertiliserSeason = formData.getAll("fertiliserSeason");
    onSubmitCreatePlant(data);
    event.target.reset();
  }

  return (
    <>
      <StyledFormWrapper onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Plant Name: *</h3>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Plant Name"
          required
        />

        <label htmlFor="botanicalName">
          <h3>Botanical Name: *</h3>
        </label>
        <input
          type="text"
          id="botanicalName"
          name="botanicalName"
          placeholder="Botanical Name"
          required
        />

        <label htmlFor="description">
          <h3>Description:</h3>
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          placeholder="Plant Description"
        ></textarea>

        <label htmlFor="lightNeed">
          <h3>Light Need: *</h3>
        </label>

        <section>
          <div>
            <input
              type="radio"
              id="lightNeed1"
              name="lightNeed"
              value="full sun"
              required
            />
            <label htmlFor="lightNeed1">Full Sun</label>
          </div>
          <div>
            <input
              type="radio"
              id="lightNeed2"
              name="lightNeed"
              value="partial shade"
            />
            <label htmlFor="lightNeed2">Partial Shade</label>
          </div>
          <div>
            <input
              type="radio"
              id="lightNeed3"
              name="lightNeed"
              value="full shade"
            />
            <label htmlFor="lightNeed3">Full Shade</label>
          </div>
        </section>

        <label htmlFor="waterNeed">
          <h3>Water Need: *</h3>
        </label>

        <section>
          <div>
            <input
              type="radio"
              id="waterNeed1"
              name="waterNeed"
              value="low"
              required
            />
            <label htmlFor="waterNeed1">Low</label>
          </div>
          <div>
            <input
              type="radio"
              id="waterNeed2"
              name="waterNeed"
              value="medium"
            />
            <label htmlFor="waterNeed2">Medium</label>
          </div>
          <div>
            <input type="radio" id="waterNeed3" name="waterNeed" value="high" />
            <label htmlFor="waterNeed3">High</label>
          </div>
        </section>

        <label htmlFor="fertiliserSeason">
          <h3>Fertiliser Season:</h3>
        </label>

        <section>
          <div>
            <input
              type="checkbox"
              id="fertiliserSeason1"
              name="fertiliserSeason"
              value="spring"
            />
            <label htmlFor="fertiliserSeason1">Spring</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="fertiliserSeason2"
              name="fertiliserSeason"
              value="summer"
            />
            <label htmlFor="fertiliserSeason2">Summer</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="fertiliserSeason3"
              name="fertiliserSeason"
              value="autumn"
            />
            <label htmlFor="fertiliserSeason3">Autumn</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="fertiliserSeason4"
              name="fertiliserSeason"
              value="winter"
            />
            <label htmlFor="fertiliserSeason4">Winter</label>
          </div>
        </section>

        <div className="button">
          <StyledButton type="submit">Create</StyledButton>
        </div>
      </StyledFormWrapper>
    </>
  );
}
