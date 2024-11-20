import { StyledButton } from "../styled/StyledButton";
import { HeaderWrapper, StyledHeadline } from "../styled/StyledHeadline";
import { StyledFormWrapper } from "../styled/StyledFormWrapper";
import UploadImage from "../UploadImage/UploadImage";
import { useState } from "react";
import ResetButton from "../ResetButton/ResetButton";
import { useRef } from "react";
import { StyledErrorMessage } from "../styled/StyledErrorMessage";

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
  const formRef = useRef(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const selectedSeasons = formData.getAll("fertiliserSeason");
    const newErrors = {};

    if (!data.name) {
      newErrors.name = "Plant Name is required.";
    }
    if (!data.botanicalName) {
      newErrors.botanicalName = "Botanical Name is required.";
    }
    if (!data.lightNeed) {
      newErrors.lightNeed = "Please select a Light Need option.";
    }
    if (!data.waterNeed) {
      newErrors.waterNeed = "Please select a Water Need option.";
    }
    if (selectedSeasons.length === 0) {
      newErrors.fertiliserSeason =
        "Please select at least one fertiliser season.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    if (isEditMode) {
      onEditPlant({ imageUrl: imageUrl, ...initialData, ...data });
      onCancel();
    } else {
      onCreatePlant({ imageUrl: imageUrl, ...initialData, ...data });
    }

    event.target.reset();
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
          <StyledHeadline>
            {isEditMode ? "Update Plant" : "Create New Plant"}
          </StyledHeadline>
        </HeaderWrapper>
        <label htmlFor="name">
          <h3>Plant Name: *</h3>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Plant Name"
          defaultValue={initialData?.name || ""}
        />
        {errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}

        <label htmlFor="botanicalName">
          <h3>Botanical Name: *</h3>
        </label>
        <input
          type="text"
          id="botanicalName"
          name="botanicalName"
          placeholder="Botanical Name"
          defaultValue={initialData?.botanicalName || ""}
        />
        {errors.botanicalName && (
          <StyledErrorMessage>{errors.botanicalName}</StyledErrorMessage>
        )}

        <label htmlFor="description">
          <h3>Description:</h3>
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          placeholder="Plant Description"
          defaultValue={initialData?.description || ""}
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
                // required={option.id === "lightNeed1"}
                defaultChecked={initialData?.lightNeed === option.value}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </section>
        {errors.lightNeed && (
          <StyledErrorMessage>{errors.lightNeed}</StyledErrorMessage>
        )}

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
                // required={option.id === "waterNeed1"}
                defaultChecked={initialData?.waterNeed === option.value}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </section>
        {errors.waterNeed && (
          <StyledErrorMessage>{errors.waterNeed}</StyledErrorMessage>
        )}

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
        {errors.fertiliserSeason && (
          <StyledErrorMessage>{errors.fertiliserSeason}</StyledErrorMessage>
        )}

        <UploadImage
          name="image"
          onChange={handleCreateUpload}
          title="Image Upload:"
        />

        <div className="button">
          <StyledButton
            type="submit"
            $variant={isEditMode ? "update" : "create"}
            $isEditMode={isEditMode}
            disabled={isImageLoading}
          >
            {isEditMode ? "Save" : "Create"}
          </StyledButton>
          {isEditMode ? (
            <StyledButton type="button" onClick={onCancel}>
              Cancel
            </StyledButton>
          ) : null}
        </div>
      </StyledFormWrapper>
    </>
  );
}
