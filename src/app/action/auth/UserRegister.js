"use server";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export default async function UserRegister(payload) {
  const userCollection = dbConnect(collectionName.userCollections);
  const { email, password } = payload;

  const hash = bcrypt.hashSync(password, 10);
  payload.password = hash;

  if (!email || !password) {
    return;
  }

  const user = await userCollection.findOne({ email });

  if (!user) {
    const result = await userCollection?.insertOne(payload);
    return {
      acknowledged: result?.acknowledged,
      insertedId: result?.insertedId.toJSON(),
    };
  }
}
