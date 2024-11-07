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
      /* FYI: genaue Anpassung in einer späteren User-Story (nach Wahl der Schriftart, Größe, etc.) */
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

const lightOptions = [
  { id: "lightNeed1", value: "full sun", label: "Full Sun" },
  { id: "lightNeed2", value: "partial shade", label: "Partial Shade" },
  { id: "lightNeed3", value: "full shade", label: "Full Shade" },
];

const waterOptions = [
  { id: "waterNeed1", value: "low", label: "Low" },
  { id: "waterNeed2", value: "medium", label: "Medium" },
  { id: "waterNeed3", value: "high", label: "High" },
];

const fertiliserOptions = [
  { id: "fertiliserSeason1", value: "summer", label: "Summer" },
  { id: "fertiliserSeason2", value: "spring", label: "Spring" },
  { id: "fertiliserSeason3", value: "autumn", label: "Autumn" },
  { id: "fertiliserSeason4", value: "winter", label: "Winter" },
];

export default function PlantForm({ onCreatePlant }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const selectedSeasons = formData.getAll("fertiliserSeason");

    if (selectedSeasons.length === 0) {
      // FYI: Hinzufügen einer universellen Error-Message für alle Pflichtfelder folgt
      alert("Please select at least one season.");
      return;
    }
    data.fertiliserSeason = selectedSeasons;
    onCreatePlant(data);

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
          {lightOptions.map((option) => (
            <div key={option.id}>
              <input
                type="radio"
                id={option.id}
                name="lightNeed"
                value={option.value}
                required={option.id === "lightNeed1"}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </section>

        <label htmlFor="waterNeed">
          <h3>Water Need: *</h3>
        </label>

        <section>
          {waterOptions.map((option) => (
            <div key={option.id}>
              <input
                type="radio"
                id={option.id}
                name="waterNeed"
                value={option.value}
                required={option.id === "waterNeed1"}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </section>

        <label htmlFor="fertiliserSeason">
          <h3>Fertiliser Season: *</h3>
        </label>

        <section>
          {fertiliserOptions.map((option) => (
            <div key={option.id}>
              <input
                type="checkbox"
                id={option.id}
                name="fertiliserSeason"
                value={option.value}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </section>

        <div className="button">
          <StyledButton type="submit">Create</StyledButton>
        </div>
      </StyledFormWrapper>
    </>
  );
}
