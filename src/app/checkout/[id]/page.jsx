import CheckoutForm from "@/components/CheckoutForm";
import React from "react";

export default async function CheckOut({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await res.json();

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold text-center mb-4">
        Book Service: {data?.title}
      </h1>
      <CheckoutForm data={data} />
    </div>
  );
}
