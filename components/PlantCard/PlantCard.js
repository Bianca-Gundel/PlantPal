import Image from "next/image";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import {
  Card,
  ImageWrapper,
  CardText,
  CardPlantName,
  CardBotanicalPlantName,
  DetailsLink,
} from "./styles";
import { PlantCardH3, PlantCardH4 } from "../styled/StyledHeadline";

export default function PlantCard({ plant, onToggleBookmark }) {
  return (
    <Card>
      <ImageWrapper>
        <Image
          alt={`Image of ${plant.name}`}
          fill
          src={
            plant.imageUrl ||
            "https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </ImageWrapper>

      <CardText>
        <BookmarkButton
          onToggleBookmark={onToggleBookmark}
          plantId={plant.id}
          isBookmarked={plant.isBookmarked}
        />
        <div>
          <PlantCardH3>{plant.name}</PlantCardH3>
          <PlantCardH4>{plant.botanicalName}</PlantCardH4>
        </div>
        <DetailsLink href={`plant/${plant.id}`}>Details</DetailsLink>
      </CardText>
    </Card>
  );
}
