const lightOptions = [
  { id: "lightNeed1", value: "Full Sun", label: "Full Sun" },
  { id: "lightNeed2", value: "Partial Shade", label: "Partial Shade" },
  { id: "lightNeed3", value: "Full Shade", label: "Full Shade" },
];

export default function FilterPlants() {
  return (
    <>
      <label htmlFor="lightNeed">
        <h3>Light Need:</h3>
      </label>

      <section>
        {lightOptions.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              id={option.id}
              name="lightNeed"
              value={option.value}
              required={option.id === "lightNeed1"}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </section>
    </>
  );
}
