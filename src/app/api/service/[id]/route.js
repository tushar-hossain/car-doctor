//
import authProvider from "@/lib/authProvider";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const corsCollection = dbConnect(collectionName.cars);

  const data = await corsCollection.findOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json(data);
};

export const DELETE = async (req, { params }) => {
  const { id } = await params;
  const bookedCollection = dbConnect(collectionName.bookingCollection);

  const { user } = await getServerSession(authProvider);
  const bookingUser = await bookedCollection.findOne({ _id: new ObjectId(id) });
  if (user.email === bookingUser.email) {
    const result = await bookedCollection.deleteOne({
      _id: new ObjectId(id),
    });
    revalidatePath("/my-booking");
    return NextResponse.json(result);
  } else {
    return NextResponse.json(
      { status: false, message: "forbidden access" },
      { status: 401 }
    );
  }
};
