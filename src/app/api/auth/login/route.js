import conectdb from "@/utils/db";
import { isticmaale } from "@/models/Users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
export const POST = async (request) => {
  const pattern = /[^0-9]/g;

  const CreateToken = (_id) => {
    return Jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
  };
  const { Lanbar, Password } = await request.json();
  try {
    await conectdb();
    if (!Lanbar || !Password) {
      //throw Error("Labada Meeloodba Buuxi");
      return new NextResponse("Labada Meeloodba Buuxi", {
        status: 400,
      });
    }

    if (Lanbar.match(pattern)) {
      //throw Error("Fdlan Istimaal Lanbar");
      return new NextResponse("Waxaad Qortay Lanbar Maaha", {
        status: 400,
      });
    }
    const User = await isticmaale.findOne({ Lanbar });
    if (!User) {
      //throw Error("Lanbarkan Ma Diwaan Gashana");
      return new NextResponse("Lanbarkan Ma Diwaan Gashana", {
        status: 400,
      });
    }

    const compare = await bcrypt.compare(Password, User.Password);
    if (!compare) {
      //throw Error("Password-kaagu Waa Qalad");
      return new NextResponse("Password-ku waa Qalad", {
        status: 400,
      });
    }

    const Token = CreateToken(User._id);
    return new NextResponse(
      JSON.stringify({
        Magac: User.Magac,
        Lanbar: User.Lanbar,
        Id: User._id,
        Token,
      }),
      { status: 200 }
    );
  } catch (Err) {
    // Response.status(400).json({ Err: Err.message });
    return new NextResponse(Err.message, {
      status: 400,
    });
  }
};
