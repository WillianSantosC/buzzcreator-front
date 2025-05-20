import { jwtVerify, type JWTPayload } from "jose";

const SECRET_KEY = process.env.JWT_SECRET || "chave_secreta";

const getKey = () => new TextEncoder().encode(SECRET_KEY);

export async function decrypt(token?: string): Promise<JWTPayload | null> {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getKey(), {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}
