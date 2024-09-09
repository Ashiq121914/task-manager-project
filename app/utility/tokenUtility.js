import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js";
import jwt from "jsonwebtoken";

// here in this token, we are hiding user email and user_id.
export const TokenEncode = (email, user_id) => {
  const KEY = JWT_KEY;
  const EXPIRE = { expiresIn: JWT_EXPIRE_TIME };
  const PAYLOAD = { email: email, user_id: user_id };
  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

// here we are decoding the token
export const TokenDecode = (token) => {
  try {
    return jwt.verify(token, JWT_KEY);
  } catch (e) {
    return null;
  }
};
