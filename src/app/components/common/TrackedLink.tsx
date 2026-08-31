"use client";

/** library imports */
import Link from "next/link";
import { ComponentProps } from "react";

/** custom imports */
import { trackEvent } from "@/utils/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  /** Clarity custom event name fired on click */
  eventName?: string;
};

/** A next/link that reports clicks to Clarity */
const TrackedLink = ({ eventName, onClick, ...props }: TrackedLinkProps) => {
  return (
    <Link
      {...props}
      onClick={(e) => {
        if (eventName) trackEvent(eventName);
        onClick?.(e);
      }}
    />
  );
};

export default TrackedLink;
