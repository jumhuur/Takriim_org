import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { nextTabaruc } from "@/models/Tabaruc";

export const POST = async (Request) => {
  const { Name, Tabaruce, Id, Lacagta, PymentType, Lanbar } =
    await Request.json();
  await conectdb();
  const newTabaruc = new nextTabaruc({
    Name,
    Tabaruce,
    Id,
    Lacagta,
    PymentType,
    Lanbar,
  });

  try {
    await newTabaruc.save();
    return new NextResponse("Waa Lagu tabaruca", { status: 200 });
  } catch (Err) {
    return new NextResponse(Err.message, { status: 400 });
  }
};
