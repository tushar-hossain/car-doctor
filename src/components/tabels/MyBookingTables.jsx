import DeleteBooking from "@/app/my-booking/[id]/page";
import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa";

export default function MyBookingTables({ booking }) {
  return (
    <div>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {booking.map((bookCar, index) => {
              return (
                <tr key={bookCar._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image
                            src={bookCar?.service_img}
                            alt="service image"
                            width={150}
                            height={150}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bookCar.service_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{bookCar.price}</td>
                  <td>{bookCar.date}</td>
                  <th>
                    <button className="btn btn-sm bg-primary rounded-lg border-0 text-white">
                      Pending
                    </button>
                  </th>
                  <th className="flex gap-2 items-center">
                    <button className="btn btn-sm bg-primary rounded-lg border-0 text-white">
                      <FaEdit size={20} />
                    </button>

                    {/* delete button */}
                    <DeleteBooking id={bookCar._id} />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
