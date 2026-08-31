/** library import */
import React from "react";

/** custom import */
import TrackedLink from "../common/TrackedLink";

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-8 lg:max-w-lg" id="contact">
      <h1 className="text-xs font-extrabold uppercase">Contact</h1>
      <div className="w-full">
        <h2 className="font-bold text-white text-sm">
          Wanna create something awesome together?
        </h2>

        <TrackedLink href="mailto:paras1799kori@gmail.com" eventName="contact_email_click">
          <button
            type="submit"
            className="w-fit font-semibold px-3 py-2 text-teal-300 hover:bg-teal-400/20 border border-teal-300 rounded-lg mt-2 text-sm"
          >
            Let's talk
          </button>
        </TrackedLink>
      </div>
    </div>
  );
};

export default Contact;
