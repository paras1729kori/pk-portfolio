"use client";
/** library import */
import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col gap-8 lg:max-w-lg">
      <h1 className="text-sm font-extrabold uppercase">Contact</h1>
      <div className="w-full">
        <h2 className="font-bold text-white">
          Wanna create something awesome together?
        </h2>

        <a href="mailto:paras1799kori@gmail.com">
          <button
            type="submit"
            className="w-fit font-semibold px-4 py-2 text-teal-300 hover:bg-teal-400/20 border border-teal-300 rounded-lg mt-2"
          >
            Let's talk
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
