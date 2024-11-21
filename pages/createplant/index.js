import PlantForm from "@/components/PlantForm/PlantForm";

export default function CreatePlant({ onCreatePlant, onUploadImage }) {
  return (
    <PlantForm onCreatePlant={onCreatePlant} onUploadImage={onUploadImage} />
  );
}
