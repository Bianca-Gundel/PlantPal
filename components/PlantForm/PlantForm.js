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
import { RadioOption } from "../Options/RadioOption";
import { CheckboxOption } from "../Options/CheckboxOption";
import { useRouter } from "next/router";
import { StyledErrorMessage } from "../styled/StyledErrorMessage";
import Image from "next/image";

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
  const router = useRouter();
  const formRef = useRef(null);
  const [isCreatingMore, setIsCreatingMore] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { createMore, ...data } = Object.fromEntries(formData);

    // Fertiliser-Daten sammeln

    const selectedSeasons = formData.getAll("fertiliserSeason");
    data.fertiliserSeason = selectedSeasons;
    
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
        {errors.name && (
          <StyledErrorMessage>
            <Image
              src={"/icons/error-sign.svg"}
              width={12}
              height={12}
              alt="Icon of am error sign"
            />
            {errors.name}
          </StyledErrorMessage>
        )}

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
        {errors.botanicalName && (
          <StyledErrorMessage>
            <Image
              src={"/icons/error-sign.svg"}
              width={12}
              height={12}
              alt="Icon of am error sign"
            />
            {errors.botanicalName}
          </StyledErrorMessage>
        )}

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

        <RadioOption
          options={lightOptions}
          name="lightNeed"
          initialValue={initialData?.lightNeed}
        />

        <label htmlFor="waterNeed">
          <StyledHeadlineH3>Water Need: *</StyledHeadlineH3>
        </label>

        <RadioOption
          options={waterOptions}
          name="waterNeed"
          initialValue={initialData?.waterNeed}
        />

        <label htmlFor="fertiliserSeason">
          <StyledHeadlineH3>Fertiliser Season: *</StyledHeadlineH3>
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
