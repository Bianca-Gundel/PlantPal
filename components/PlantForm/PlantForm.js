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
import { StyledErrorMessage } from "../styled/StyledErrorMessage";
import Image from "next/image";
import { RadioOption } from "../Options/RadioOption";
import { CheckboxOption } from "../Options/CheckboxOption";

const lightOptions = [
  {
    id: "lightNeed1",
    value: "Full Sun",
    label: "Full Sun",
    icon: "sun-full.svg",
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
    icon: "sun.svg",
  },
];

const waterOptions = [
  { id: "waterNeed1", value: "Low", label: "Low", icon: "drop.svg" },
  {
    id: "waterNeed2",
    value: "Medium",
    label: "Medium",
    icon: "drop-half.svg",
  },
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
    icon: "spring.svg",
  },
  { id: "fertiliserSeason3", value: "Fall", label: "Fall", icon: "fall.svg" },
  {
    id: "fertiliserSeason4",
    value: "Winter",
    label: "Winter",
    icon: "winter.svg",
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

  const [lightNeed, setLightNeed] = useState(initialData?.lightNeed || "");
  const [waterNeed, setWaterNeed] = useState(initialData?.waterNeed || "");
  const [fertiliserSeasons, setFertiliserSeasons] = useState(
    initialData?.fertiliserSeason || []
  );

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { createMore, ...data } = Object.fromEntries(formData);

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

    setLightNeed("");
    setWaterNeed("");
    setFertiliserSeasons([]);

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

  function handleInputChange(event) {
    const { name, value } = event.target;
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (value) {
        delete newErrors[name];
      }
      return newErrors;
    });
  }

  function handleRadioChange({ target: { name, value } }) {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (value) {
        delete newErrors[name];
      } else {
        newErrors[name] = `Please select a ${name} option.`;
      }
      return newErrors;
    });
  }

  function handleCheckboxChange({ target: { name, value } }) {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (value && value.length > 0) {
        delete newErrors[name];
      } else {
        newErrors[name] = `Please select at least one ${name}.`;
      }
      return newErrors;
    });
  }

  return (
    <>
      <StyledFormWrapper ref={formRef} onSubmit={handleSubmit}>
        <HeaderWrapper>
          <ResetButton
            formRef={formRef}
            isEditMode={isEditMode}
            onReset={() => {
              setLightNeed(""); // Reset für die Light Need Option
              setWaterNeed(""); // Reset für die Water Need Option
              setFertiliserSeasons([]); // Reset für die Fertiliser Seasons
            }}
          />

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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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

        <section>
          <RadioOption
            options={lightOptions}
            name="lightNeed"
            initialValue={lightNeed} // Dynamisch gebunden
            onChange={(value) => setLightNeed(value)} // Aktualisiert Zustand
          />
        </section>
        {errors.lightNeed && (
          <StyledErrorMessage>
            <Image
              src={"/icons/error-sign.svg"}
              width={12}
              height={12}
              alt="Icon of am error sign"
            />
            {errors.lightNeed}
          </StyledErrorMessage>
        )}

        <label htmlFor="waterNeed">
          <StyledHeadlineH3>Water Need: *</StyledHeadlineH3>
        </label>

        <section>
          <RadioOption
            options={waterOptions}
            name="waterNeed"
            initialValue={waterNeed} // Dynamisch gebunden
            onChange={(value) => setWaterNeed(value)} // Aktualisiert Zustand
          />
        </section>

        {errors.waterNeed && (
          <StyledErrorMessage>
            <Image
              src={"/icons/error-sign.svg"}
              width={12}
              height={12}
              alt="Icon of am error sign"
            />
            {errors.waterNeed}
          </StyledErrorMessage>
        )}

        <label htmlFor="fertiliserSeason">
          <StyledHeadlineH3>Fertiliser Season: *</StyledHeadlineH3>
        </label>

        <section>
          <CheckboxOption
            options={fertiliserOptions}
            name="fertiliserSeason"
            initialValues={fertiliserSeasons} // Dynamisch gebunden
            onChange={(values) => setFertiliserSeasons(values)} // Aktualisiert Zustand
          />
        </section>

        {errors.fertiliserSeason && (
          <StyledErrorMessage>
            <Image
              src={"/icons/error-sign.svg"}
              width={12}
              height={12}
              alt="Icon of am error sign"
            />
            {errors.fertiliserSeason}
          </StyledErrorMessage>
        )}

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
                onChange={(event) => setIsCreatingMore(event.target.checked)}
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
