export default function UploadImage({ name, onChange, title }) {
  return (
    <>
      <label htmlFor={name}>
        <h3>{title}</h3>
      </label>

      <section>
        <input type="file" name={name} onChange={onChange} />
      </section>
    </>
  );
}
