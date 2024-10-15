import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const boat = [
  { value: "Majesty 100(100ft)", label: "Majesty 100(100ft)" },
  { value: "Princess S78(78ft)", label: "Princess S78(78ft)" },
  {
    value: "Azimut Grande 30 Metri (98ft)",
    label: "Azimut Grande 30 Metri (98ft)",
  },
  {
    value: "Sunseeker Predator 80 (80ft)",
    label: "Sunseeker Predator 80 (80ft)",
  },
  {
    value: "Ferretti Pershing 70 (70ft)",
    label: "Ferretti Pershing 70 (70ft)",
  },
  { value: "Riva 100 Corsaro(100ft)", label: "Riva 100 Corsaro(100ft)" },
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

export default function DriverForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (data) => {
    console.log(data); // Submit form data here (e.g., send to server)
    reset(); // Reset form after submission
  };
  return (
    <section className="pb-16">
      <div className="row w-[90%] md:w-[80%] max-w-[1920px] mx-auto pt-16 border-t border-white">
        <div className="col bg-dark rounded-2xl p-6 pt-16">
          <h2 className="text-4xl text-red text-center font-semibold mb-14">
            Give us a few details about what{" "}
            <span className="contents lg:block">
              you need, and we&apos;ll get straight back to you!
            </span>
          </h2>
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)} className="text-xs">
              <div className="field-row flex flex-col md:flex-row gap-5 mb-6">
                <div className="field-col flex-1">
                  <label className="mb-2 inline-block" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="block font-light w-[100%] rounded-lg p-3 bg-transparent border border-white"
                    type="text"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="error text-red pt-1 inline-block">
                      Please enter your name.
                    </span>
                  )}
                </div>
                <div className="field-col flex-1">
                  <label className="mb-2 inline-block" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="block font-light w-[100%] rounded-lg p-3 bg-transparent border border-white"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <span className="error text-red pt-1 inline-block">
                      Please enter your email address.
                    </span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="error text-red pt-1 inline-block">
                      Please enter a valid email address.
                    </span>
                  )}
                </div>
              </div>
              <div className="field-row flex flex-col md:flex-row gap-5 mb-6">
                <div className="field-col flex-1 [&>div]:w-[100%]">
                  <label className="mb-2 inline-block" htmlFor="date">
                    Desired Date
                  </label>
                  <Controller
                    control={control}
                    defaultValue=""
                    {...register("date", { required: true })}
                    render={({ field: { onChange, value } }) => (
                      <DatePicker
                        className="block font-light w-[100%] rounded-lg p-3 bg-transparent border border-white"
                        minDate={value}
                        selected={value}
                        onChange={onChange}
                      />
                    )}
                  />
                  {errors.date && (
                    <span className="error text-red pt-1 inline-block">
                      Please enter date.
                    </span>
                  )}
                </div>
                <div className="field-col flex-1">
                  <label className="mb-2 inline-block" htmlFor="people">
                    Number of People
                  </label>
                  <input
                    className="block font-light w-[100%] rounded-lg p-3 bg-transparent border border-white"
                    type="number"
                    {...register("people", { required: true })}
                    min="1"
                    max="100"
                  />
                  {errors.people && errors.email.type === "required" && (
                    <span className="error text-red pt-1 inline-block">
                      Please enter number of people.
                    </span>
                  )}
                </div>
              </div>
              <div className="field-row flex gap-5 mb-8 mt-12">
                <div className="field-col flex-1">
                  <label className="mb-2 inline-block" htmlFor="message">
                    Other Information{" "}
                    <span className="block">
                      -Anything else you&apos;d like us to be aware of
                    </span>
                  </label>
                  <textarea
                    className="block font-light w-[100%] h-44 md:h-64 rounded-lg p-2 bg-transparent border border-white"
                    type="text"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="error text-red pt-1 inline-block">
                      Please enter a message.
                    </span>
                  )}
                </div>
              </div>
              <div className="field-row flex justify-end">
                <div className="field-col submit">
                  <input
                    className="bg-red py-3 px-14 rounded-md"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
