"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function UpdateCheckoutForm({ data }) {
  const session = useSession();
  const router = useRouter();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const payload = {
      date,
      phone,
      address,
    };

    //   data post server
    try {
      const res = await fetch(
        `http://localhost:3000/api/update-booking/${data._id}`,
        {
          method: "PATCH",
          body: JSON.stringify(payload),
        }
      );
      const result = await res.json();
      if (result.modifiedCount) {
        toast.success("Update successful");
        router.push("/my-booking");
      }
    } catch (error) {
      toast.error("Service is not booked");
    }
  };

  return (
    <form onSubmit={handelSubmit} className="bg-[#F3F3F3] p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* name */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            readOnly
            defaultValue={session?.data?.user?.name}
            name="name"
            className="input w-full border-0"
          />
        </div>
        {/* email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            readOnly
            defaultValue={session?.data?.user?.email}
            name="email"
            className="input w-full border-0"
          />
        </div>
        {/* due amount */}
        <div>
          <label htmlFor="price">Due Amount</label>
          <input
            type="number"
            readOnly
            defaultValue={data?.price}
            name="price"
            className="input w-full border-0"
          />
        </div>
        {/* date */}
        <div>
          <label htmlFor="name">Date</label>
          <input
            type="date"
            defaultValue={data?.date}
            name="date"
            className="input w-full border-0"
          />
        </div>
        {/* phone */}
        <div>
          <label htmlFor="price">Phone</label>
          <input
            type="number"
            defaultValue={data.phone}
            name="phone"
            className="input w-full border-0"
          />
        </div>
        {/* address */}
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            defaultValue={data.address}
            name="address"
            className="input w-full border-0"
          />
        </div>
      </div>

      <input
        type="submit"
        value="Update Booking Confirm"
        className="btn btn-primary w-full border-0 rounded-sm mt-4 text-white hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
      />
    </form>
  );
}
