import PlantForm from "@/components/PlantForm/PlantForm";

export default function CreatePlant({
  onCreatePlant,
  isCreateMore,
  creatingSuccessMessage,
  onUploadImage,
  onCreateMore,
}) {
  return (
    <PlantForm
      onCreateMore={onCreateMore}
      isCreateMore={isCreateMore}
      isCreating={true}
      onCreatePlant={onCreatePlant}
      onUploadImage={onUploadImage}
      creatingSuccessMessage={creatingSuccessMessage}
    />
  );
}
