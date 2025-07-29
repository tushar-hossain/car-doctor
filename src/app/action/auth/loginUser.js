"use server";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export default async function loginUser(payload) {
  try {
    const { email, password } = payload;
    if (!email) return null;

    const userCollection = dbConnect(collectionName.userCollections);
    const user = await userCollection.findOne({ email });

    if (!user) return null;
    const isPasswordOk = bcrypt.compareSync(password, user?.password);
    if (!isPasswordOk) return null;
    return user;
  } catch (error) {
    return { message: "User not found", error };
  }
}
