import { StyledHeadlineH3 } from "../styled/StyledHeadline";

export default function UploadImage({ name, onChange, title }) {
  return (
    <>
      <label htmlFor={name}>
        <StyledHeadlineH3>{title}</StyledHeadlineH3>
      </label>

      <section>
        <input type="file" name={name} onChange={onChange} />
      </section>
    </>
  );
}
