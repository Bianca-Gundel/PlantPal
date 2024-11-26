import Image from "next/image";
import { useRouter } from "next/router";
import {
  IconsWrapper,
  IconContainer,
  ImageBorder,
  StyledButtonContainer,
  StyledEditButton,
  StyledPlantDescription,
  StyledIconText,
  IconWrapper1,
  IconWrapper2,
  IconWrapper3,
  InnerIconWrapper,
} from "@/components/styled/StyledDetailsPage";
import { useState } from "react";
import { StyledButton } from "@/components/styled/StyledButton";
import PlantForm from "@/components/PlantForm/PlantForm";
import { StyledList } from "@/components/styled/StyledList";
import BookmarkButton from "@/components/BookmarkButton/BookmarkButton";

export default function PlantDetails({
  plants,
  onDeletePlant,
  onCreatePlant,
  onIsImageLoading,
  onUploadImage,
  onEditPlant,
  onToggleBookmark,
}) {
  const [isDeleteOption, setIsDeleteOption] = useState(false);
  const [toggleButtonName, setToggleButtonName] = useState("Delete");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return <div>Loading...</div>;

  const plantData = plants ? plants.find((plant) => plant.id === id) : null;

  if (!plantData) return <div>No data available</div>;

  const Icon = ({ src, alt, iconWidth, iconHeight }) => (
    <Image
      unoptimized
      alt={alt}
      src={src}
      width={iconWidth}
      height={iconHeight}
    />
  );

  const waterIconSrc =
    {
      High: "/icons/drop-full.svg",
      Medium: "/icons/drop-half.svg",
      Low: "/icons/drop.svg",
    }[plantData.waterNeed] || "";

  const lightIconSrc =
    {
      "Full Sun": "/icons/sun.svg",
      "Partial Shade": "/icons/sun-half.svg",
      "Full Shade": "/icons/sun-full.svg",
    }[plantData.lightNeed] || "";

  function toggleFormVisibility() {
    setIsFormVisible((prevState) => !prevState);
  }

  function toggleDeleteOption() {
    setIsDeleteOption((prevState) => !prevState);

    if (toggleButtonName === "Delete") {
      setToggleButtonName("Cancel");
    } else {
      setToggleButtonName("Delete");
    }
  }

  function handleEdit(updatedPlant) {
    onEditPlant(plantData.id, updatedPlant);
  }

  function handleCancel() {
    setIsFormVisible(false);
  }

  return (
    <>
      <StyledEditButton onClick={toggleFormVisibility}>
        <Image
          src={"/icons/pencil-solid.svg"}
          width={25}
          height={25}
          alt="Icon of a dead plant"
          unoptimized
        />
      </StyledEditButton>
      {isFormVisible && (
        <>
          <PlantForm
            onCreatePlant={onCreatePlant}
            onUploadImage={onUploadImage}
            onEditPlant={handleEdit}
            onCancel={handleCancel}
            isFormVisible={isFormVisible}
            isEditMode={true}
            initialData={plantData}
          />
        </>
      )}

      <h2>{plantData.name}</h2>
      <h3>{plantData.botanicalName}</h3>

      <ImageBorder>
        <BookmarkButton
          onToggleBookmark={onToggleBookmark}
          plantId={plantData.id}
          isBookmarked={plantData.isBookmarked}
        />

        <Image
          alt={`Image of ${plantData.name}`}
          fill
          src={
            plantData.imageUrl ||
            "https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </ImageBorder>
      <StyledPlantDescription>{plantData.description}</StyledPlantDescription>

      <IconsWrapper>
        <InnerIconWrapper>
          <IconContainer>
            <Icon
              src={waterIconSrc}
              alt="Icon of a water drop"
              iconWidth={25}
              iconHeight={25}
            />
          </IconContainer>
          <StyledIconText>
            <p>{plantData.waterNeed}</p>
          </StyledIconText>
        </InnerIconWrapper>

        <InnerIconWrapper>
          <IconContainer>
            <Icon
              src={lightIconSrc}
              alt="Icon of a sun"
              iconWidth={25}
              iconHeight={25}
            />
          </IconContainer>
          <StyledIconText>
            <p>{plantData.lightNeed}</p>
          </StyledIconText>
        </InnerIconWrapper>

        <InnerIconWrapper>
          <IconContainer>
            <Icon
              src={"/icons/fertiliser.svg"}
              alt="Icon of a fertiliser"
              iconWidth={25}
              iconHeight={25}
            />
          </IconContainer>
          <StyledIconText>
            <StyledList>
              {plantData.fertiliserSeason.map((season) => {
                return <li key={season}>{season}</li>;
              })}
            </StyledList>
          </StyledIconText>
        </InnerIconWrapper>
      </IconsWrapper>
      <StyledButtonContainer>
        {isDeleteOption && (
          <>
            <p>Do you really want to delete the plant?</p>
            <StyledButton $variant="delete" onClick={() => onDeletePlant(id)}>
              Delete
            </StyledButton>
          </>
        )}
        <StyledButton onClick={toggleDeleteOption}>
          {toggleButtonName}
        </StyledButton>
      </StyledButtonContainer>
    </>
  );
}
