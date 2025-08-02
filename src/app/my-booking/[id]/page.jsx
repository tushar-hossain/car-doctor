import UpdateCheckoutForm from "@/components/UpdateCheckoutForm";
import { headers } from "next/headers";
import React from "react";

export default async function UpdateBookingPage({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/update-booking/${id}`, {
    headers: await headers(),
  });
  const data = await res.json();

  console.log(data);

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold text-center">Update Bookings</h1>

      {/* update booking form */}
      <UpdateCheckoutForm data={data} />
    </div>
  );
}
