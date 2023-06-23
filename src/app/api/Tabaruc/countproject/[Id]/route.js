import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { nextTabaruc } from "@/models/Tabaruc";

export const GET = async (Request, { params }) => {
  const { Id } = params;
  try {
    await conectdb();
    const res = await nextTabaruc
      .find({ Id: Id })
      .sort({ createdAt: -1 })
      .count();
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (Err) {
    return new NextResponse(Err.message, { status: 400 });
  }
};
