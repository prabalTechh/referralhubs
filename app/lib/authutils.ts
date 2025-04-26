// lib/auth-utils.ts
import jwt from "jsonwebtoken";

export const getUserFromToken = (token: string | undefined) => {
  if (!token) return null;

  try {
    const secret = process.env.JWT_SECRET || "fallback_jwt_secret_not_for_production";
    const decoded = jwt.verify(token, secret) as { id: string; email: string };
    return decoded;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
