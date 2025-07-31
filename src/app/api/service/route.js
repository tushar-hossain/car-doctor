import authProvider from "@/lib/authProvider";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { user } = await getServerSession(authProvider);
  const bookedCollection = dbConnect(collectionName.bookingCollection);
  const result = await bookedCollection.find({ email: user?.email }).toArray();

  return NextResponse.json(result);
};

export const POST = async (req) => {
  const body = await req.json({});
  const bookingCollection = dbConnect(collectionName.bookingCollection);
  const result = await bookingCollection.insertOne(body);
  return NextResponse.json(result);
};
