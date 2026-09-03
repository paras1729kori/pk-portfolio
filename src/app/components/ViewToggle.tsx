"use client";
/** library imports */
import React, { useEffect, useState } from "react";
import { IoPersonOutline, IoHardwareChipOutline } from "react-icons/io5";

type ViewMode = "human" | "agent";

const ViewToggle = () => {
  const [mode, setMode] = useState<ViewMode>("human");
  const [markdown, setMarkdown] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (mode === "agent" && !markdown) {
      setLoading(true);
      fetch("/agent.md")
        .then((res) => res.text())
        .then((text) => setMarkdown(text))
        .catch(() => setMarkdown("# Error\n\nCould not load agent.md"))
        .finally(() => setLoading(false));
    }
  }, [mode, markdown]);

  /** lock body scroll while agent view is open */
  useEffect(() => {
    document.body.style.overflow = mode === "agent" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mode]);

  const buttonClasses = (active: boolean) =>
    `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      active
        ? "bg-white text-gray-900"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <>
      {/* Agent view overlay */}
      {mode === "agent" && (
        <div className="scrollbar-hide fixed inset-0 z-40 overflow-y-auto bg-gray-900 px-6 pb-32 pt-16 md:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
              agent.md — machine-readable version of this site
            </p>
            {loading ? (
              <p className="text-sm text-slate-400">Loading…</p>
            ) : (
              <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-slate-300">
                {markdown}
              </pre>
            )}
          </div>
        </div>
      )}

      {/* Hovering toggle */}
      <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-slate-700 bg-gray-800/80 p-1 shadow-lg backdrop-blur">
        <button
          type="button"
          aria-pressed={mode === "human"}
          onClick={() => setMode("human")}
          className={buttonClasses(mode === "human")}
        >
          <IoPersonOutline />
          Human
        </button>
        <button
          type="button"
          aria-pressed={mode === "agent"}
          onClick={() => setMode("agent")}
          className={buttonClasses(mode === "agent")}
        >
          <IoHardwareChipOutline />
          Agent
        </button>
      </div>
    </>
  );
};

export default ViewToggle;
