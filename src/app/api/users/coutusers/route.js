import { NextResponse } from "next/server";
import { isticmaale } from "@/models/Users";
import conectdb from "@/utils/db";
export const dynamic = "force-dynamic";
export const GET = async (Request) => {
  try {
    await conectdb();
    const Usercount = await isticmaale.find().count();
    return new NextResponse(JSON.stringify(Usercount), { status: 200 });
  } catch (Err) {
    console.log(Err);
    return new NextResponse(JSON.stringify(Err), { status: 400 });
  }
};
