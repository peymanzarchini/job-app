import { cookies } from "next/headers";

export async function GET() {
  try {
    cookies().delete("token");
    return Response.json({ message: "Logout Success" }, { status: 200 });
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
