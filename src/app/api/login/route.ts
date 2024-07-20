import connectDB from "@/config/database";
import User from "@/models/User";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    connectDB();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return Response.json({ message: "Email or Password incorrect" }, { status: 401 });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    const { password: pass, ...rest } = user._doc;

    cookies().set("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return Response.json({ message: "Login Success", user: rest }, { status: 200 });
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
