import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { Project } from "@/models/Projects";

// upate one Project
export const PATCH = async (request, { params }) => {
  const { Id } = params;
  const { Tabaruc } = await request.json();
  try {
    await conectdb();
    const res = await Project.findByIdAndUpdate(Id);
    if (!res) {
      return new NextResponse("Not found", { status: 400 });
    }

    res.Tabaruc = Tabaruc;
    await res.save();
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (Err) {
    return new NextResponse(Err.message, { status: 500 });
  }
};
