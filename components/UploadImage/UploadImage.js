import { StyledHeadlineH3 } from "../styled/StyledHeadline";
import { HiddenInput, StyledUploadLabel, UploadContainer } from "./styles";

export default function UploadImage({ name, onChange, title }) {
  return (
    <UploadContainer>
      <StyledHeadlineH3>{title}</StyledHeadlineH3>
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
