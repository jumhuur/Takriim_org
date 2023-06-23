import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { Project } from "@/models/Projects";

export const GET = async (Request, { params }) => {
  const { Id } = params;
  try {
    await conectdb()
    const res = await Project.findById(Id);
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (Err) {
    throw new NextResponse(JSON.stringify(Err), { status: 400 });
  }
};
