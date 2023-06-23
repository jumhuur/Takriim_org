import { NextResponse } from "next/server";
import { Project } from "@/models/Projects";
import conectdb from "@/utils/db";

export const GET = async (Request) => {
  try {
    await conectdb();
    const allPro = await Project.find().sort({ updatedAt: -1 });
    return new NextResponse(JSON.stringify(allPro), { status: 200 });
  } catch (Err) {
    return new NextResponse(JSON.stringify(Err), { status: 400 });
  }
};
