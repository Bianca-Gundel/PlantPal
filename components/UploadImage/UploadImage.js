import { BaseH5 } from "../styled/StyledHeadline";
import { HiddenInput, StyledUploadLabel, UploadContainer } from "./styles";

export default function UploadImage({ name, onChange, title }) {
  return (
    <UploadContainer>
      <BaseH5>{title}</BaseH5>
      <StyledUploadLabel htmlFor={name}>Click to upload</StyledUploadLabel>
      <HiddenInput
        id={name}
        type="file"
        name={name}
        onChange={onChange}
        accept="image/*"
      />
    </UploadContainer>
  );
}
