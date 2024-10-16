import React from "react";
//import Select from 'react-select';

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const genre = [
  { value: "genre1", label: "genre1" },
  { value: "genre2", label: "genre2" },
  { value: "genre3", label: "genre3" },
  { value: "genre4", label: "genre4" },
];
const venue = [
  { value: "venue1", label: "venue1" },
  { value: "venue2", label: "venue2" },
  { value: "venue3", label: "venue3" },
];
const type = [
  { value: "type1", label: "type1" },
  { value: "type2", label: "type2" },
  { value: "type3", label: "type3" },
];
const mnt = [
  { value: "Jan", label: "Jan" },
  { value: "Feb", label: "Feb" },
  { value: "Mar", label: "Mar" },
  { value: "Apr", label: "Apr" },
  { value: "May", label: "May" },
  { value: "Jun", label: "Jun" },
  { value: "Jul", label: "Jul" },
  { value: "Aug", label: "Aug" },
  { value: "Sep", label: "Sep" },
  { value: "Oct", label: "Oct" },
  { value: "Nov", label: "Nov" },
  { value: "Dec", label: "Dec" },
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

export default function ClubSearch() {
  return (
    <div className="search-box md:p-5 mb-12 lg:mb-0 passion-radio rounded-2xl bg-dark">
      <p className="text-center text-xs font-medium mb-4 hidden lg:block">
        Search our events calendar and find the perfect club nights and events
        to attend during your stay in Ibiza!
      </p>
      <ul className="months gap-3 mb-4 hidden lg:flex">
        {month.map((value, index) => {
          return (
            <li key={index} className="flex-1">
              <a
                href="#"
                className="block p-1 pt-[0.35rem] bg-light-red rounded-full text-xs text-center text-black"
              >
                {value}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col lg:flex-row gap-4 text-sm">
        <div className="genre flex-1">
          {
            //<Select
            //options={genre}
            //styles={customStyles}
            ///>
          }
        </div>
        <div className="venue flex-1">
          {
            //<Select
            //options={venue}
            //styles={customStyles}
            ///>
          }
        </div>
        <div className="type flex-1">
          {
            //<Select
            //options={type}
            //styles={customStyles}
            ///>
          }
        </div>
        <div className="type flex-1 lg:hidden">
          {
            //<Select
            //options={mnt}
            //styles={customStyles}
            ///>
          }
        </div>
        <div className="search-btn w-full lg:w-[17%]">
          <button className="bg-red p-3 block w-full rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
}

