import dbConnect, { collectionName } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default async function ServicesSection() {
  const servicesData = await dbConnect(collectionName.cars).find().toArray();

  return (
    <div>
      <div className="text-center">
        <p className="text-[#FF3811] font-bold">Service</p>
        <h1 className="text-2xl font-semibold mb-3 mt-3">Our Service Area</h1>
        <div className="flex items-center justify-center">
          <p className="mb-3 md:mb-0 md:w-[717px] md:h-[60px] text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesData?.map((service) => {
          return (
            <div
              className="p-3 border border-gray-200 rounded-lg"
              key={service._id}
            >
              <Image
                className="h-50 w-full
                 object-cover object-center rounded-lg"
                src={service.img}
                alt={service.title}
                width={314}
                height={208}
                placeholder="blur"
                blurDataURL="..."
              />
              <div>
                <h1 className="text-xl md:text-2xl font-semibold my-2 text-secondary">
                  {service?.title}
                </h1>
                <p className="flex items-center justify-between text-primary">
                  <span className="font-bold"> Price: ${service?.price}</span>
                  <Link href={`/services/${service._id}`}>
                    <FaArrowRight />
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center my-4">
        <button className="btn btn-outline bg-primary border-0 text-white hover:text-black rounded-lg">
          More Services
        </button>
      </div>
    </div>
  );
}
