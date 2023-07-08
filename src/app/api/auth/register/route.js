import { NextResponse } from "next/server";
import conectdb from "@/utils/db";
import { isticmaale } from "@/models/Users";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
export const POST = async (request) => {
  const CreateToken = (_id) => {
    return Jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
  };

  const { Magac, Lanbar, Password } = await request.json();
  await conectdb();
  const Hashedpassword = await bcrypt.hash(Password, 10);
  const User = new isticmaale({
    Magac,
    Lanbar,
    Password: Hashedpassword,
  });
  const isUser = await isticmaale.find({ Lanbar: Lanbar });
  try {
    if (isUser.length === 1) {
      throw Error("Lanbarkan Waa la diwan galiyay");
    }

    if (Lanbar.length < 7 || Lanbar.length > 7) {
      throw Error("Lanbarku Ha Noqdo 7 Lanbar Kaliya");
    }
    await User.save();
    const Token = CreateToken(User._id);
    //console.log(Token);
    return new NextResponse(
      JSON.stringify({
        Magac: User.Magac,
        Lanbar: User.Lanbar,
        Id: User._id,
        Token,
      }),
      {
        status: 200,
      }
    );
  } catch (Err) {
    return new NextResponse(Err.message, {
      status: 400,
      statusText: Err.message,
    });
  }
};
