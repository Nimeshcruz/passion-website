"use server";

export async function handleContactForm(formData) {
  console.log(formData);
  return {
    message: "Please enter a valid message",
  };
}
