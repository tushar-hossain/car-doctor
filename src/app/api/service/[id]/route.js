"use server";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const corsCollection = dbConnect(collectionName.cars);

  const data = await corsCollection.findOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json(data);
};
