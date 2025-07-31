import { revalidatePath } from "next/cache";

const { default: dbConnect, collectionName } = require("@/lib/dbConnect");
const { ObjectId } = require("mongodb");
const { NextResponse } = require("next/server");

export const GET = async (req, { params }) => {
  const { id } = await params;

  const bookingCollection = dbConnect(collectionName.bookingCollection);
  const query = { _id: new ObjectId(id) };
  const result = await bookingCollection.findOne(query);

  return NextResponse.json(result);
};

export const PATCH = async (req, { params }) => {
  const { id } = await params;
  const body = await req.json();
  const bookingCollection = dbConnect(collectionName.bookingCollection);
  const filter = { _id: new ObjectId(id) };
  const updatedDoc = {
    $set: { ...body },
  };
  const options = { upsert: true };
  const result = await bookingCollection.updateOne(filter, updatedDoc, options);
  revalidatePath("/my-booking");

  return NextResponse.json(result);
};
