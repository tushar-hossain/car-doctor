"use client";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function DeleteBooking({ id }) {
  const handelDelete = async (id) => {
    console.log(id);
  };

  return (
    <button
      onClick={() => handelDelete(id)}
      className="btn btn-sm bg-primary rounded-lg border-0 text-white"
    >
      <FaRegTrashAlt size={20} />
    </button>
  );
}
