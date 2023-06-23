import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { nextTabaruc } from "@/models/Tabaruc";
export const GET = async (request) => {
  try {
    await conectdb();
    const res = await nextTabaruc.aggregate([
      { $group: { _id: null, Total: { $sum: "$Lacagta" } } },
    ]);

    return new NextResponse(JSON.stringify(res[0].Total), { status: 200 });
  } catch (Err) {
    return new NextResponse(Err.message, { status: 400 });
  }
};
