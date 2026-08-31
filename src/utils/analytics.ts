import Clarity from "@microsoft/clarity";

/**
 * Fire a Microsoft Clarity custom event.
 * No-ops outside production and never throws if Clarity isn't initialized.
 */
export const trackEvent = (name: string) => {
  if (process.env.NODE_ENV !== "production") return;
  try {
    Clarity.event(name);
  } catch {
    // Clarity not initialized (e.g. blocked by an extension) — ignore
  }
};

/** "Building a Real-Time Speech Pipeline" -> "building_a_real_time_speech_pipeline" */
export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
