import MyBookingTables from "@/components/tabels/MyBookingTables";
import { headers } from "next/headers";

const myBooking = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: await headers(),
  });
  const bookingData = await res?.json();
  return bookingData;
};

export default async function MyBookings() {
  const booking = await myBooking();

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold text-center">My All Bookings</h1>

      {/* table */}
      <MyBookingTables booking={booking} />
    </div>
  );
}
