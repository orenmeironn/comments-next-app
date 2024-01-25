import { delay } from "@/app/utils";
import { NextRequest, NextResponse } from "next/server";

const { default: comments } = await import("./_initData.json");

export async function GET() {
  await delay(1000);
  return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const comment = {
    userId: body.userId,
    comment: body.comment,
  };
  comments.push(comment);
  await delay(2500);
  return NextResponse.json(comment);
}
