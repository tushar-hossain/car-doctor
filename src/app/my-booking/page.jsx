"use client";
import MyBookingTables from "@/components/tabels/MyBookingTables";
import React, { useEffect, useState } from "react";

export default function MyBookings() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const myBooking = async () => {
      const res = await fetch("http://localhost:3000/api/service");
      const bookingData = await res.json();
      setBooking(bookingData);
    };
    myBooking();
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold text-center">My All Bookings</h1>

      {/* table */}
      <MyBookingTables booking={booking} />
    </div>
  );
}
