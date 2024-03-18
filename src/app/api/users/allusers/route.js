import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { isticmaale } from "@/models/Users";
export const dynamic = "force-dynamic";
export const GET = async (Request) => {
  // fetch
  try {
    await conectdb();
    const Users = await isticmaale.find();
    return new NextResponse(JSON.stringify(Users), { status: 200 });
    // if (data.ok) {
    //   return new NextResponse(Users, { status: 200 });
    // }
  } catch (Err) {
    console.log(Err);
    return new NextResponse(Err, { status: 500 });
  }
};
