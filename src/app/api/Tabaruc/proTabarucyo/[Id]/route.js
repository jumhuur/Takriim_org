import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { nextTabaruc } from "@/models/Tabaruc";

export const GET = async (Request, { params }) => {
  const { Id } = params;
  console.log(Id);
  try {
    await conectdb();
    const res = await nextTabaruc
      .find({ Id: Id })
      .sort({ createdAt: -1 })
      .limit(7);
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (Err) {
    console.log(Err);
    return new NextResponse(Err.message, { status: 400 });
  }
};
