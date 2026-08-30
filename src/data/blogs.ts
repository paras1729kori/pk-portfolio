import { BlogDataType } from "@/utils/allInterfaces";

export const blogs: BlogDataType[] = [
  {
    id: crypto.randomUUID(),
    title: "Building a Real-Time Speech Pipeline",
    shortDescription:
      "What I learned benchmarking a local ASR model, chunk size by chunk size, while building an AI copilot for doctor-patient conversations.",
    link: "https://be-for-fe.notion.site/Building-a-Real-Time-Speech-Pipeline-3cc164ddc22f8094bb6dc03dc3842c2b",
    date: "15.03.2024",
    readingTime: "9 mins",
  },
  {
    id: crypto.randomUUID(),
    title: "The Backend That Tried to Please Everyone (And Why It Couldn't)",
    shortDescription:
      "One API tried to please every frontend. Here's the story of how it broke — and the pattern that fixed it.",
    link: "https://be-for-fe.notion.site/The-Backend-That-Tried-to-Please-Everyone-And-Why-It-Couldn-t-3bf164ddc22f8041b127c8de44ce5d2d",
    date: "09.02.2026",
    readingTime: "7 mins",
  },
];
