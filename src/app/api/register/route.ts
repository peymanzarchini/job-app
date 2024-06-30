import connectDB from "@/config/database";
import User from "@/models/User";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    connectDB();
    const { firstName, lastName, email, password } = await req.json();
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    const isUserExists = await User.findOne({ email });
    if (isUserExists) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    const user = await newUser.save();
    return Response.json({ message: "Register Success", user }, { status: 201 });
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
