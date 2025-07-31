"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function DeleteBooking({ id }) {
  const router = useRouter();

  const handelDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    await res.json();
    router.refresh();
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
