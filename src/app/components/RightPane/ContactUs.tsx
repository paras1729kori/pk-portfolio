"use client";
import React, { FormEvent, SyntheticEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full flex flex-col gap-8 lg:max-w-lg">
      <h1 className="text-sm font-extrabold uppercase">Contact</h1>
      <div className="w-full flex flex-col gap-3">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2 items-start">
            <label className="text-white font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full rounded-lg bg-slate-800 h-10 p-3 border-0 focus:outline-none placeholder:text-slate-600"
              placeholder="John Doe"
              value={formData?.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="w-full flex flex-col gap-2 items-start">
            <label className="text-white font-semibold" htmlFor="name">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-lg bg-slate-800 h-10 p-3 border-0 focus:outline-none placeholder:text-slate-600"
              placeholder="john.doe@company.com"
              value={formData?.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="w-full flex flex-col gap-2 items-start">
            <label className="text-white font-semibold" htmlFor="name">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full rounded-lg bg-slate-800 h-[150px] resize-none p-3 border-0 focus:outline-none placeholder:text-slate-600"
              placeholder="Enter your message"
              value={formData?.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full font-semibold px-4 py-2 text-teal-300 bg-teal-400/20 rounded-lg disabled:cursor-not-allowed disabled:bg-teal-400/10 disabled:text-teal-600"
            disabled={Object.values(formData).some(
              (item) => item?.length === 0
            )}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
