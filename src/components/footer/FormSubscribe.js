"use client";
import { React, useState } from "react";

export default function FormSubscribe() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic email validation (can be improved)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      return;
    }

    // Handle form submission here (e.g., send email to backend)
    console.log(`Email submitted: ${email}`);
    setEmail("");
    setIsEmailValid(true);
  };
  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <div className="field-wrap flex text-gray rounded-lg overflow-hidden leading-none">
        <input
          className="bg-black flex-1 px-4 pb-3 pt-[0.85rem]"
          type="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          className="px-4 pb-3 pt-[0.85rem] bg-yellow text-black font-semibold"
          type="submit"
        >
          Subscribe
        </button>
      </div>
      {!isEmailValid && (
        <p className="text-white text-xs mt-2">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
