import { NextRequest, NextResponse } from "next/server";

export const GET = async (res, req) => {
  console.log(res);

  const data = {
    id: 0,
    categories: [
      "home",
      "about",
      "demo",
      "home",
      "about",
      "demo",
      "home",
      "about",
      "demo",
    ],
  };

  return NextResponse.json(data, { status: 200 });
};
