import React from "react";
import Title from "./Title";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://getform.io/f/1e6fe561-5a12-482f-80dd-2efba2252de1",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );
      console.log("Form submitted successfully", response);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          action="https://getform.io/f/1e6fe561-5a12-482f-80dd-2efba2252de1"
          method="POST"
          encType="multipart/form-data"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 font-mono py-3 w-max text-base font-medium rounded-md text-black bg-gradient-to-r from-blue-200 to-cyan-500 drop-shadow-md hover:stroke-white"
          >
            Let's talk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
