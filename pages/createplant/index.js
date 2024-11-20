import PlantForm from "@/components/PlantForm/PlantForm";

export default function CreatePlant({ onCreatePlant, onUploadImage }) {
  return (
    <PlantForm
      isCreateMode={true}
      onCreatePlant={onCreatePlant}
      onUploadImage={onUploadImage}
    />
  );
}
