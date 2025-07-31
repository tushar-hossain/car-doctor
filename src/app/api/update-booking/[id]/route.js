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


