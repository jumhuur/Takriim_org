import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { nextTabaruc } from "@/models/Tabaruc";

export const GET = async (Request) => {
  try {
    await conectdb();
    const res = await nextTabaruc.find().limit(1).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (Err) {
    console.log(Err);
    return new NextResponse(Err.message, { status: 400 });
  }
};
