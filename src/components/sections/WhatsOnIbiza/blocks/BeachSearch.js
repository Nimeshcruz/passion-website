"use client";
import Select from "react-select";

const area = [
  { value: "area1", label: "area1" },
  { value: "area2", label: "area2" },
  { value: "area3", label: "area3" },
  { value: "area4", label: "area4" },
];
const popularity = [
  { value: "low", label: "low" },
  { value: "medium", label: "medium" },
  { value: "high", label: "high" },
];
const smoking = [
  { value: "smoking", label: "smoking" },
  { value: "non-smoking", label: "non-smoking" },
];
const customStyles = {
  control: (baseStyles) => ({
    ...baseStyles,
    padding: "0.2rem",
    background: "#101010",
    color: "#fff",
    borderRadius: "0.5rem",
    borderWidth: "1px",
    borderColor: "#FBFDF5",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    background: state.isDisabled
      ? "#8f8f8f"
      : state.isSelected
        ? "#ff0037"
        : "#101010",
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    background: "#101010",
    color: "#fff",
    borderRadius: "0.5rem",
    borderWidth: "1px",
    borderColor: "#FBFDF5",
  }),
};

export default function BeachSearch() {
  return (
    <div className="search-box p-5 passion-radio rounded-2xl bg-dark mb-4">
      <div className="flex flex-col lg:flex-row gap-4 text-sm">
        <div className="genre flex-1">
          <Select options={area} styles={customStyles} />
        </div>
        <div className="venue flex-1">
          <Select options={popularity} styles={customStyles} />
        </div>
        <div className="type flex-1">
          <Select options={smoking} styles={customStyles} />
        </div>
        <div className="search-btn lg:w-[17%]">
          <button className="bg-red p-3 block w-full rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
}
