export default function ResetButton({ formRef, isEditMode }) {
  const handleReset = () => {
    if (formRef?.current) {
      formRef.current.reset();
    }
  };
  return !isEditMode ? (
    <button type="button" onClick={handleReset}>
      Reset
    </button>
  ) : null;
}
