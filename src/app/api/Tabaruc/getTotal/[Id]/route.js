import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { nextTabaruc } from "@/models/Tabaruc";

export const GET = async (request, { params }) => {
  const { Id } = params;
  try {
    await conectdb();
    const res = await nextTabaruc.aggregate([
      { $match: { Id: Id } },
      { $group: { _id: null, Total: { $sum: "$Lacagta" } } },
    ]);

    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (Err) {
    return new NextResponse(Err.message, { status: 400 });
  }
};
