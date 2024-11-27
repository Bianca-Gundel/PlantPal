import Image from "next/image";
import { StyledResetButton } from "./styled";

export default function ResetButton({ formRef, isEditMode, onReset }) {
  const handleReset = () => {
    if (formRef?.current) {
      formRef.current.reset();
    }
    if (onReset) {
      onReset();
    }
  };
  return !isEditMode ? (
    <StyledResetButton type="button" onClick={handleReset}>
      <Image
        src={"/icons/eraser-icon.svg"}
        width={22}
        height={22}
        alt="Icon of a eraser to reset the form"
        unoptimized
      />
    </StyledResetButton>
  ) : null;
}
