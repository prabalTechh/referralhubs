// app/platform/page.tsx
import { cookies } from "next/headers";
import { getUserFromToken } from "../lib/authutils"; 
import { redirect } from "next/navigation";

export default async function PlatformPage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("auth_token")?.value;

  const user = getUserFromToken(token);

  if (!user) {
    redirect("/");
  }

  // User is signed in
  return <div>Welcome to your platform! User ID: {user.id}</div>;
}
