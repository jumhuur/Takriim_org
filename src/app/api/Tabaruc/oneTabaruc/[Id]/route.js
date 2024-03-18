import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { nextTabaruc } from "@/models/Tabaruc";
export const dynamic = "force-dynamic";
export const GET = async (Request, { params }) => {
  const { Id } = params;
  try {
    await conectdb();
    const res = nextTabaruc.findById(Id).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (Err) {
    return new NextResponse(Err.message, { status: 400 });
  }
};
