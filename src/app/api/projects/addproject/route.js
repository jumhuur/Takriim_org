import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { Project } from "@/models/Projects";

export const POST = async (request) => {
  const { Name, Hadaf, Macluumaad, Tabaruc, Qayb, Sawir, Muuqaal, Active } =
    await request.json();
  await conectdb();
  const newProject = new Project({
    Name,
    Hadaf,
    Macluumaad,
    Tabaruc,
    Qayb,
    Sawir,
    Muuqaal,
    Active,
  });
  try {
    await newProject.save();
    return new NextResponse("Waa la abuuray Mashruucan", { status: 200 });
  } catch (Err) {
    return new NextResponse(Err.message, { status: 400 });
  }
};
