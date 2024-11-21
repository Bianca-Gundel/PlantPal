import { StyledButton } from "../styled/StyledButton";
import {
  HeaderWrapper,
  StyledHeadlineH2,
  StyledHeadlineH3,
} from "../styled/StyledHeadline";
import { StyledFormWrapper } from "../styled/StyledFormWrapper";
import UploadImage from "../UploadImage/UploadImage";
import { useState } from "react";
import ResetButton from "../ResetButton/ResetButton";
import { useRef } from "react";
import { useRouter } from "next/router";

const lightOptions = [
  { id: "lightNeed1", value: "Full Sun", label: "Full Sun" },
  { id: "lightNeed2", value: "Partial Shade", label: "Partial Shade" },
  { id: "lightNeed3", value: "Full Shade", label: "Full Shade" },
];

const waterOptions = [
  { id: "waterNeed1", value: "Low", label: "Low" },
  { id: "waterNeed2", value: "Medium", label: "Medium" },
  { id: "waterNeed3", value: "High", label: "High" },
];

const fertiliserOptions = [
  { id: "fertiliserSeason1", value: "Summer", label: "Summer" },
  { id: "fertiliserSeason2", value: "Spring", label: "Spring" },
  { id: "fertiliserSeason3", value: "Fall", label: "Fall" },
  { id: "fertiliserSeason4", value: "Winter", label: "Winter" },
];

export default function PlantForm({
  onCreatePlant,
  onEditPlant,
  onUploadImage,
  isEditMode = false,
  initialData = {},
  onCancel,
  imageUrl,
}) {
  const router = useRouter();
  const formRef = useRef(null);
  const [isCreatingMore, setIsCreatingMore] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { createMore, ...data } = Object.fromEntries(formData);

    const selectedSeasons = formData.getAll("fertiliserSeason");
    data.fertiliserSeason = selectedSeasons;

    if (selectedSeasons.length === 0) {
      // FYI: Hinzufügen einer universellen Error-Message für alle Pflichtfelder folgt
      alert("Please select at least one season.");
      return;
    }

    if (isEditMode) {
      onEditPlant({ imageUrl: imageUrl, ...initialData, ...data });
      onCancel();
    } else {
      onCreatePlant({ imageUrl: imageUrl, ...initialData, ...data });
    }

    event.target.reset();

    if (!createMore) {
      router.push("/");
    }
  }

  async function handleCreateUpload(event) {
    setIsImageLoading(true);

    event.preventDefault();

    const formData = new FormData();
    const image = event.target.files[0];

    formData.append("image", image);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const { url } = await response.json();

    onUploadImage(url);

    setIsImageLoading(false);

    return;
  }

  // FYI: Hinzufügen eines Stylings für das Formular, (Hintergrund usw.) folgt noch!

  return (
    <>
      <StyledFormWrapper ref={formRef} onSubmit={handleSubmit}>
        <HeaderWrapper>
          <ResetButton formRef={formRef} isEditMode={isEditMode} />
          <StyledHeadlineH2>
            {isEditMode ? "Update Plant" : "Create New Plant"}
          </StyledHeadlineH2>
        </HeaderWrapper>
        <label htmlFor="name">
          <StyledHeadlineH3>Plant Name: *</StyledHeadlineH3>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Plant Name"
          defaultValue={initialData?.name || ""}
          required
        />

        <label htmlFor="botanicalName">
          <StyledHeadlineH3>Botanical Name: *</StyledHeadlineH3>
        </label>
        <input
          type="text"
          id="botanicalName"
          name="botanicalName"
          placeholder="Botanical Name"
          defaultValue={initialData?.botanicalName || ""}
          required
        />

        <label htmlFor="description">
          <StyledHeadlineH3>Description:</StyledHeadlineH3>
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          placeholder="Plant Description"
          defaultValue={initialData?.description || ""}
        ></textarea>

        <label htmlFor="lightNeed">
          <StyledHeadlineH3>Light Need: *</StyledHeadlineH3>
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
                defaultChecked={initialData?.lightNeed === option.value}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </section>

        <label htmlFor="waterNeed">
          <StyledHeadlineH3>Water Need: *</StyledHeadlineH3>
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
                defaultChecked={initialData?.waterNeed === option.value}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </section>

        <label htmlFor="fertiliserSeason">
          <StyledHeadlineH3>Fertiliser Season: *</StyledHeadlineH3>
        </label>

        <section>
          {fertiliserOptions.map((option) => (
            <div key={option.id}>
              <input
                type="checkbox"
                id={option.id}
                name="fertiliserSeason"
                value={option.value}
                defaultChecked={
                  isEditMode
                    ? initialData?.fertiliserSeason.includes(option.value)
                    : null
                }
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </section>

        <UploadImage
          name="image"
          onChange={handleCreateUpload}
          title="Image Upload:"
        />
        {!isEditMode ? (
          <>
            <div>
              <label htmlFor="createMore">Create more?</label>
              <input
                type="checkbox"
                id="createMore"
                name="createMore"
                checked={isCreatingMore}
                onClick={(event) => setIsCreatingMore(event.target.checked)}
              />
            </div>
          </>
        ) : null}

        <div>
          <StyledButton
            type="submit"
            $variant={isEditMode ? "update" : "create"}
            $isEditMode={isEditMode}
            disabled={isImageLoading}
          >
            {isEditMode ? "Save" : "Create"}
          </StyledButton>
          {isEditMode && (
            <StyledButton type="button" onClick={onCancel}>
              Cancel
            </StyledButton>
          )}
        </div>
      </StyledFormWrapper>
    </>
  );
}
