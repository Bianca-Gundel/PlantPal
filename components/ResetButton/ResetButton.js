import Image from "next/image";
import { StyledResetButton } from "./styled";

export default function ResetButton({ formRef, isEditMode, onReset }) {
  const handleReset = () => {
    if (formRef?.current) {
      formRef.current.reset();
    }
    if (onReset) {
      onReset(); // Führt zusätzliche Reset-Logik aus
    }
  };
  return !isEditMode ? (
    <StyledResetButton type="button" onClick={handleReset}>
      <Image
        src={"/icons/eraser-icon.svg"}
        width={25}
        height={25}
        alt="Icon of a eraser to reset the form"
        unoptimized
      />
    </StyledResetButton>
  ) : null;
}
