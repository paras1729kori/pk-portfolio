/** library imports */
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

/** custom imports */
import { BlogDataType } from "@/utils/allInterfaces";

export async function GET(request: Request) {
  const data: BlogDataType[] = [
    {
      id: uuidv4(),
      title: "The Backend That Tried to Please Everyone (And Why It Couldn't)",
      shortDescription:
        "One API tried to please every frontend. Here's the story of how it broke — and the pattern that fixed it.",
      link: "https://be-for-fe.notion.site/The-Backend-That-Tried-to-Please-Everyone-And-Why-It-Couldn-t-3bf164ddc22f8041b127c8de44ce5d2d",
      date: "09.02.2026",
      readingTime: "7 mins",
    },
  ];

  return NextResponse.json(data);
}
