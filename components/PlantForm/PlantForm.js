import { StyledButton } from "../styled/StyledButton";
import { HeaderWrapper, StyledHeadline } from "../styled/StyledHeadline";
import { StyledFormWrapper } from "../styled/StyledFormWrapper";
import UploadImage from "../UploadImage/UploadImage";
import { useState } from "react";
import ResetButton from "../ResetButton/ResetButton";
import { useRef } from "react";
import { RadioOption } from "../Options/RadioOption";
import { CheckboxOption } from "../Options/CheckboxOption";

const lightOptions = [
  {
    id: "lightNeed1",
    value: "Full Sun",
    label: "Full Sun",
    icon: "sun.svg",
  },
  {
    id: "lightNeed2",
    value: "Partial Shade",
    label: "Partial Shade",
    icon: "sun-half.svg",
  },
  {
    id: "lightNeed3",
    value: "Full Shade",
    label: "Full Shade",
    icon: "sun-full.svg",
  },
];

const waterOptions = [
  { id: "waterNeed1", value: "Low", label: "Low", icon: "drop.svg" },
  { id: "waterNeed2", value: "Medium", label: "Medium", icon: "drop-half.svg" },
  { id: "waterNeed3", value: "High", label: "High", icon: "drop-full.svg" },
];

const fertiliserOptions = [
  {
    id: "fertiliserSeason1",
    value: "Summer",
    label: "Summer",
    icon: "sun-full.svg",
  },
  {
    id: "fertiliserSeason2",
    value: "Spring",
    label: "Spring",
    icon: "spring-icon.svg",
  },
  {
    id: "fertiliserSeason3",
    value: "Fall",
    label: "Fall",
    icon: "fall-icon.svg",
  },
  {
    id: "fertiliserSeason4",
    value: "Winter",
    label: "Winter",
    icon: "winter-icon.svg",
  },
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

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Fertiliser-Daten sammeln

    const selectedSeasons = formData.getAll("fertiliserSeason");
    data.fertiliserSeason = selectedSeasons;

    if (selectedSeasons.length === 0) {
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
          defaultValue={initialData?.botanicalName || ""}
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
          defaultValue={initialData?.description || ""}
        ></textarea>

        <label htmlFor="lightNeed">
          <h3>Light Need: *</h3>
        </label>

        <RadioOption
          options={lightOptions}
          name="lightNeed"
          initialValue={initialData?.lightNeed}
        />

        <label htmlFor="waterNeed">
          <h3>Water Need: *</h3>
        </label>
        <RadioOption
          options={waterOptions}
          name="waterNeed"
          initialValue={initialData?.waterNeed}
        />

        <label htmlFor="fertiliserSeason">
          <h3>Fertiliser Season: *</h3>
        </label>
        <CheckboxOption
          options={fertiliserOptions}
          name="fertiliserSeason"
          initialValues={initialData?.fertiliserSeason}
        />

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
